import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../config/api.config';
import { ApiResponse, Application } from '../interfaces/api.interfaces';

@Injectable({ providedIn: 'root' })
export class JobService {
  private readonly url = `${API_URL}/apply`;

  constructor(private http: HttpClient) {}

  addApplication(app: Application): Observable<ApiResponse<{ application: Application }>> {
    return this.http.post<ApiResponse<{ application: Application }>>(this.url, app);
  }
}
