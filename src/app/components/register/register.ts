import { Component } from '@angular/core';
import{ FormsModule} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router ) {}
  onRegister() {
    const data={
      name: this.name,
      email: this.email,
      password: this.password
    };
    this.authService.register(data).subscribe({      
      next: (res) => {
        console.log('Registration successful:', res);
        alert('Registration successful!');
        // Handle successful registration, e.g., navigate to login page, show success message, etc.

        //Navigate to login page after successful registration
        this.router.navigate(['/login']);
        
      },
      error: (err) => {
        console.error('Registration failed:', err);
        alert('Registration failed. Please try again.');
        // Handle registration error, e.g., show error message to user
      }
    });
  }
}
