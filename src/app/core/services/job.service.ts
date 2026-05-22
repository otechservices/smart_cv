import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from '../config/api.config';
import { ApiResponse, Application, JobOffer, JobQueueItem, QueueStatus } from '../interfaces/api.interfaces';

@Injectable({ providedIn: 'root' })
export class JobService {
  private readonly base = ConfigService.toApiUrl('');

  constructor(private http: HttpClient) {}

  addApplication(app: Application): Observable<ApiResponse<{ application: Application }>> {
    return this.http.post<ApiResponse<{ application: Application }>>(`${this.base}/apply`, app);
  }

  searchJobs(q: string, location = '', limit = 20): Observable<ApiResponse<JobOffer[]>> {
    return this.http.get<ApiResponse<JobOffer[]>>(`${this.base}/jobs/search`, {
      params: { q, location, limit: limit.toString() },
    });
  }

  getQueue(): Observable<ApiResponse<JobQueueItem[]>> {
    return this.http.get<ApiResponse<JobQueueItem[]>>(`${this.base}/jobs/queue`);
  }

  addToQueue(payload: Partial<JobQueueItem>): Observable<ApiResponse<JobQueueItem>> {
    return this.http.post<ApiResponse<JobQueueItem>>(`${this.base}/jobs/queue`, payload);
  }

  removeFromQueue(id: number): Observable<ApiResponse<null>> {
    return this.http.delete<ApiResponse<null>>(`${this.base}/jobs/queue/${id}`);
  }

  generateLetter(id: number): Observable<ApiResponse<{ cover_letter: string; status: QueueStatus }>> {
    return this.http.post<ApiResponse<any>>(`${this.base}/jobs/queue/${id}/generate-letter`, {});
  }

  updateStatus(id: number, status: QueueStatus): Observable<ApiResponse<JobQueueItem>> {
    return this.http.patch<ApiResponse<JobQueueItem>>(`${this.base}/jobs/queue/${id}/status`, { status });
  }

  updateQueueItem(id: number, data: Partial<JobQueueItem>): Observable<ApiResponse<JobQueueItem>> {
    return this.http.patch<ApiResponse<JobQueueItem>>(`${this.base}/jobs/queue/${id}`, data);
  }
}
