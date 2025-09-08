import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cv-preview',
  templateUrl: './cv-preview.component.html',
  styleUrls: ['./cv-preview.component.scss']
})
export class CvPreviewComponent implements OnChanges {
  // We expect to receive the form's value as an input
  @Input() cvData: any;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    // This life-cycle hook is called when any data-bound input property changes.
    // It's a good place to react to new data.
    if (changes['cvData'] && this.cvData) {
      // You can add logic here if the preview needs to process data.
      // For now, we'll just log it for debugging.
      // console.log('Preview data updated:', this.cvData);
    }
  }
}
