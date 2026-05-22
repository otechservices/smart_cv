import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from '../config/api.config';
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
  private readonly base = ConfigService.toApiUrl('');

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

  downloadPdf(id: number, filename: string): void {
    this.http.get(`${this.base}/cv/${id}/pdf`, { responseType: 'blob' }).subscribe(blob => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename || `CV_${id}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    });
  }

  getPdfBlob(id: number): Observable<Blob> {
    return this.http.get(`${this.base}/cv/${id}/pdf`, { responseType: 'blob' });
  }

  togglePublic(id: number): Observable<ApiResponse<{ is_public: boolean; public_token: string }>> {
    return this.http.put<ApiResponse<any>>(`${this.base}/cv/${id}/toggle-public`, {});
  }

  getPublicCv(token: string): Observable<ApiResponse<any>> {
    return this.http.get<ApiResponse<any>>(`${this.base}/p/${token}`);
  }

  getDesign(id: number): Observable<ApiResponse<{ canvas_json: string | null; cover_image: string | null }>> {
    return this.http.get<ApiResponse<any>>(`${this.base}/cv/${id}/design`);
  }

  saveDesign(id: number, payload: { canvas_json: string; cover_image: string }): Observable<ApiResponse<any>> {
    return this.http.put<ApiResponse<any>>(`${this.base}/cv/${id}/design`, payload);
  }
}
