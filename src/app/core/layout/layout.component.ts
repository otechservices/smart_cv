import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { AuthService } from '../services/auth.service';
import { AuthUser } from '../interfaces/api.interfaces';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  constructor(
    public themeService: ThemeService,
    public authService: AuthService,
  ) {}

  get user(): AuthUser | null {
    return this.authService.getUser();
  }

  get userInitials(): string {
    const name = this.user?.name ?? '';
    return name.split(' ').map(p => p[0]).slice(0, 2).join('').toUpperCase() || 'U';
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  logout(): void {
    this.authService.logout();
  }
}
