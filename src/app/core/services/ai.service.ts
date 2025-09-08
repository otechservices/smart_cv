import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AIService {

  private apiUrl = 'http://localhost:8000/api/ai';

  constructor(private http: HttpClient) { }

  // Example method for cover letter generation
  generateCoverLetter(prompt: string): Observable<{ letter: string }> {
    return this.http.post<{ letter: string }>(`${this.apiUrl}/generate-letter`, { prompt });
  }

  // Example method for CV optimization
  optimizeCvContent(content: string): Observable<{ optimizedContent: string }> {
    return this.http.post<{ optimizedContent: string }>(`${this.apiUrl}/optimize-cv`, { content });
  }
}
