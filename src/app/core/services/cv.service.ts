import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// TODO: Define CV data model
// export interface Cv { ... }

@Injectable({
  providedIn: 'root'
})
export class CvService {

  // TODO: Replace with actual backend URL from environment variables
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  // Example method
  saveCv(cvData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/cv`, cvData);
  }
}
