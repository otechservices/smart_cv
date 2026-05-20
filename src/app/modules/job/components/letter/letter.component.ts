import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AIService } from '../../../../core/services/ai.service';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.scss']
})
export class LetterComponent implements OnInit {

  letterForm!: FormGroup;
  generatedLetterHtml = '';
  isLoading = false;

  readonly quillModules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ header: [1, 2, 3, false] }],
      ['clean'],
    ],
  };

  constructor(
    private fb: FormBuilder,
    private aiService: AIService,
    private messageService: MessageService,
  ) {}

  ngOnInit(): void {
    this.letterForm = this.fb.group({
      jobDescription: ['', Validators.required],
      cvId: [null],
    });
  }

  generateLetter(): void {
    this.letterForm.markAllAsTouched();
    if (this.letterForm.invalid) return;

    const { jobDescription, cvId } = this.letterForm.value;
    this.isLoading = true;

    this.aiService.generateCoverLetter(jobDescription, cvId).subscribe({
      next: (res) => {
        this.generatedLetterHtml = this.toHtml(res.data.letter);
        this.isLoading = false;
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: 'La génération a échoué. Veuillez réessayer.',
        });
        this.isLoading = false;
      },
    });
  }

  copyLetter(): void {
    if (!this.generatedLetterHtml) return;
    const text = this.generatedLetterHtml.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ');
    navigator.clipboard.writeText(text).then(() => {
      this.messageService.add({ severity: 'success', summary: 'Copié', detail: 'Lettre copiée dans le presse-papiers.' });
    }).catch(() => {});
  }

  private toHtml(text: string): string {
    return text
      .split(/\n\n+/)
      .map(para => `<p>${para.replace(/\n/g, '<br>')}</p>`)
      .join('');
  }
}
