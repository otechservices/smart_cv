import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { PdfService } from 'src/app/core/services/pdf.service';

@Component({
  selector: 'app-cv-form',
  templateUrl: './cv-form.component.html',
  styleUrls: ['./cv-form.component.scss']
})
export class CvFormComponent implements OnInit {
  cvForm: FormGroup;
  cvData$: Observable<any>;

  constructor(private fb: FormBuilder, private pdfService: PdfService) { }

  ngOnInit(): void {
    this.cvForm = this.fb.group({
      personalInfo: this.fb.group({
        name: ['', Validators.required],
        jobTitle: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: [''],
        address: ['']
      }),
      professionalSummary: ['', Validators.required],
      experiences: this.fb.array([]),
      educations: this.fb.array([]),
      skills: this.fb.array([]),
      languages: this.fb.array([])
    });

    this.cvData$ = this.cvForm.valueChanges.pipe(
      startWith(this.cvForm.value)
    );
  }

  // --- Getters for FormArrays for easy access in template ---
  get experiences(): FormArray {
    return this.cvForm.get('experiences') as FormArray;
  }

  get educations(): FormArray {
    return this.cvForm.get('educations') as FormArray;
  }

  get skills(): FormArray {
    return this.cvForm.get('skills') as FormArray;
  }

  get languages(): FormArray {
    return this.cvForm.get('languages') as FormArray;
  }

  // --- Methods to add new items to FormArrays ---
  addExperience(): void {
    this.experiences.push(this.fb.group({
      company: [''],
      position: [''],
      startDate: [''],
      endDate: [''],
      description: ['']
    }));
  }

  addEducation(): void {
    this.educations.push(this.fb.group({
      institution: [''],
      degree: [''],
      endDate: ['']
    }));
  }

  addSkill(): void {
    this.skills.push(this.fb.group({
      name: [''],
      level: ['Beginner']
    }));
  }

  addLanguage(): void {
    this.languages.push(this.fb.group({
      name: [''],
      proficiency: ['Professional']
    }));
  }

  // --- Methods to remove items from FormArrays ---
  removeExperience(index: number): void {
    this.experiences.removeAt(index);
  }

  removeEducation(index: number): void {
    this.educations.removeAt(index);
  }

  removeSkill(index: number): void {
    this.skills.removeAt(index);
  }

  removeLanguage(index: number): void {
    this.languages.removeAt(index);
  }

  onSubmit(): void {
    if (this.cvForm.valid) {
      // In a real app, you might save the form first via CvService
      // For now, we'll just trigger the PDF export.
      this.pdfService.exportCvAsPdf(this.cvForm.value);
    } else {
      console.error('Form is invalid');
      // Optionally, mark all fields as touched to show validation errors
      this.cvForm.markAllAsTouched();
    }
  }
}
