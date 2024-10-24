import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../services/theme.service';
import { AuthService } from '../controllers/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit, AfterViewInit {
  isDarkMode!: boolean;
  iflogin!: boolean;
  constructor(
    private router: Router,
    private themeService: ThemeService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.themeService.isDarkMode$.subscribe(
      (isDarkMode) => (this.isDarkMode = isDarkMode)
    );
     this.iflogin = this.authService.ifloginornot();
  }

  ngAfterViewInit(): void {
    this.iflogin = this.authService.ifloginornot();
  }
  logout() {
    this.authService.logout();
    this.iflogin = this.authService.ifloginornot();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
