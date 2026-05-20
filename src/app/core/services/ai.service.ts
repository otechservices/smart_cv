import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../config/api.config';
import { ApiResponse } from '../interfaces/api.interfaces';

@Injectable({ providedIn: 'root' })
export class AIService {
  private readonly url = `${API_URL}/ai`;

  constructor(private http: HttpClient) {}

  generateCoverLetter(
    jobDescription: string,
    cvId?: number | null,
  ): Observable<ApiResponse<{ letter: string }>> {
    return this.http.post<ApiResponse<{ letter: string }>>(
      `${this.url}/generate-letter`,
      { jobDescription, cvId },
    );
  }

  optimizeCv(content: string): Observable<ApiResponse<{ optimizedContent: string }>> {
    return this.http.post<ApiResponse<{ optimizedContent: string }>>(
      `${this.url}/optimize-cv`,
      { content },
    );
  }
}
