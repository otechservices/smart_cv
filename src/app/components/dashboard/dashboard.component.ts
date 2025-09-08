import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // Placeholder data for demonstration
  stats = {
    cvsCreated: 5,
    lettersGenerated: 12,
    applicationsSent: 8,
    applicationsSuccessful: 2
  };

  constructor() { }

  ngOnInit(): void {
  }

}
