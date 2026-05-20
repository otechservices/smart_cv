import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../../../core/config/api.config';
import { ApiResponse } from '../../../core/interfaces/api.interfaces';

export interface AdminUser {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'customer';
  is_active: boolean;
  created_at: string;
  deleted_at: string | null;
}

export interface AdminStats {
  users: number;
  admins: number;
  customers: number;
  active: number;
  cvs: number;
  applications: number;
}

@Injectable({ providedIn: 'root' })
export class AdminService {
  private base = `${API_URL}/admin`;

  constructor(private http: HttpClient) {}

  stats(): Observable<ApiResponse<AdminStats>> {
    return this.http.get<ApiResponse<AdminStats>>(`${this.base}/stats`);
  }

  users(search = '', role = ''): Observable<ApiResponse<AdminUser[]>> {
    let params = new HttpParams();
    if (search) params = params.set('search', search);
    if (role)   params = params.set('role', role);
    return this.http.get<ApiResponse<AdminUser[]>>(`${this.base}/users`, { params });
  }

  createUser(body: { name: string; email: string; password: string; role: string }): Observable<ApiResponse<AdminUser>> {
    return this.http.post<ApiResponse<AdminUser>>(`${this.base}/users`, body);
  }

  updateRole(id: number, role: string): Observable<ApiResponse<AdminUser>> {
    return this.http.put<ApiResponse<AdminUser>>(`${this.base}/users/${id}/role`, { role });
  }

  toggleStatus(id: number): Observable<ApiResponse<AdminUser>> {
    return this.http.put<ApiResponse<AdminUser>>(`${this.base}/users/${id}/toggle`, {});
  }

  deleteUser(id: number): Observable<ApiResponse<null>> {
    return this.http.delete<ApiResponse<null>>(`${this.base}/users/${id}`);
  }
}
