import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent  {
email: string = '';
password: string = '';

constructor(private authService: AuthService, private router: Router) {}  

onlogin() {
  const loginData = {
    email: this.email,
    password: this.password
  };

  this.authService.login(loginData).subscribe({
    next: (res: any) => {

      console.log('Login successful:', res);
      // Handle successful login, e.g., store token, navigate to dashboard, etc.
      //Save JWT Token to local storage
      localStorage.setItem('token', res.token); 
      
      //Navigate to dashboard or home page
       this.router.navigate(['/dashboard']);
    },
    error: (err) => {
      console.error('Login failed:', err);
      // Handle login error, e.g., show error message to user
    }
});  
}
}



