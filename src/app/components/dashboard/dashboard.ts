import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboadComponent {
  constructor(private router: Router) {}

  logout() {
    // Clear JWT token from local storage
    localStorage.removeItem('token');
    
    // Optionally, you can also clear any user-related data from your application state here
    
    // Navigate to the login page after logout
    this.router.navigate(['/login']);
  }
}
