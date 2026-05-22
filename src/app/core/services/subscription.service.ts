import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from '../config/api.config';
import { ApiResponse, Plan } from '../interfaces/api.interfaces';

@Injectable({ providedIn: 'root' })
export class SubscriptionService {
  private readonly url = ConfigService.toApiUrl('subscriptions');

  constructor(private http: HttpClient) {}

  getPlans(): Observable<ApiResponse<Plan[]>> {
    return this.http.get<ApiResponse<Plan[]>>(this.url);
  }
}
