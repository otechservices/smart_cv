import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { ConfigService } from '../config/api.config';
import { ApiResponse, AuthCredentials, AuthResponse, AuthUser, RegisterCredentials } from '../interfaces/api.interfaces';

const TOKEN_KEY = 'cv_token';
const USER_KEY  = 'cv_user';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private readonly url = ConfigService.toApiUrl('auth');
  private _user$ = new BehaviorSubject<AuthUser | null>(this.storedUser());

  readonly user$ = this._user$.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: AuthCredentials): Observable<ApiResponse<AuthResponse>> {
    return this.http.post<ApiResponse<AuthResponse>>(`${this.url}/login`, credentials).pipe(
      tap(res => this.persist(res.data)),
    );
  }

  register(credentials: RegisterCredentials): Observable<ApiResponse<AuthResponse>> {
    return this.http.post<ApiResponse<AuthResponse>>(`${this.url}/register`, credentials).pipe(
      tap(res => this.persist(res.data)),
    );
  }

  logout(): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    this._user$.next(null);
    this.router.navigate(['/auth/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(TOKEN_KEY);
  }

  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  getUser(): AuthUser | null {
    return this._user$.value;
  }

  private persist(data: AuthResponse): void {
    localStorage.setItem(TOKEN_KEY, data.token);
    localStorage.setItem(USER_KEY, JSON.stringify(data.user));
    this._user$.next(data.user);
  }

  private storedUser(): AuthUser | null {
    try {
      const raw = localStorage.getItem(USER_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }
}
