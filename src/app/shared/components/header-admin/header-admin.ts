import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-header-admin',
  imports: [MatIconModule],
=======


@Component({
  selector: 'app-header-admin',
  imports: [ MatIconModule, ],
>>>>>>> ec79e4ae5b69dfa28162e5e8b7dff490d49ca3cd
  templateUrl: './header-admin.html',
  styleUrl: './header-admin.css'
})
export class HeaderAdmin {

<<<<<<< HEAD
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  logout(): void {
    this.authService.logout();
    // Redirigir al login o página principal
    this.router.navigate(['/login']);
  }
}
=======
}
>>>>>>> ec79e4ae5b69dfa28162e5e8b7dff490d49ca3cd
