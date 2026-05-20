import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../config/api.config';
import { ApiResponse, CvPayload } from '../interfaces/api.interfaces';

export interface CvSummary {
  id: number;
  title: string;
  job_title: string | null;
  name: string | null;
  updated_at: string;
}

@Injectable({ providedIn: 'root' })
export class CvService {
  private readonly base = `${API_URL}`;

  constructor(private http: HttpClient) {}

  list(): Observable<ApiResponse<CvSummary[]>> {
    return this.http.get<ApiResponse<CvSummary[]>>(`${this.base}/cvs`);
  }

  get(id: number): Observable<ApiResponse<any>> {
    return this.http.get<ApiResponse<any>>(`${this.base}/cv/${id}`);
  }

  create(cv: Partial<CvPayload> & { title?: string }): Observable<ApiResponse<any>> {
    return this.http.post<ApiResponse<any>>(`${this.base}/cv`, cv);
  }

  save(id: number, cv: Partial<CvPayload> & { title?: string }): Observable<ApiResponse<any>> {
    return this.http.put<ApiResponse<any>>(`${this.base}/cv/${id}`, cv);
  }

  delete(id: number): Observable<ApiResponse<null>> {
    return this.http.delete<ApiResponse<null>>(`${this.base}/cv/${id}`);
  }
}
