import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CvService } from 'src/app/core/services/cv.service';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss'],
})
export class PortfolioPageComponent implements OnInit {
  cv: any = null;
  loading = true;
  notFound = false;

  constructor(private route: ActivatedRoute, private cvService: CvService) {}

  ngOnInit(): void {
    const token = this.route.snapshot.paramMap.get('token') ?? '';
    this.cvService.getPublicCv(token).subscribe({
      next: res => {
        this.cv = res.data;
        this.loading = false;
      },
      error: () => {
        this.notFound = true;
        this.loading = false;
      },
    });
  }

  get info() { return this.cv?.personal_info ?? {}; }
  get initial() { return (this.info.name ?? 'U').charAt(0).toUpperCase(); }
  get experiences() { return this.cv?.experiences ?? []; }
  get educations()  { return this.cv?.educations  ?? []; }
  get skills()      { return this.cv?.skills      ?? []; }
  get languages()   { return this.cv?.languages   ?? []; }
}
