import { Component } from '@angular/core';
import { UserDataService } from '../../user-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-signup',
  standalone: false,
  
  templateUrl: './login-signup.component.html',
  styleUrl: './login-signup.component.scss'
})

export class LoginSignupComponent {
  isLoginForm: boolean = true;
  userData = { name: '', email: '', password: '', confirmPassword: '', isUserLoggedIn: false };
  
  constructor(private userDataService: UserDataService, private router: Router) {}

  toggleForm() {
    this.isLoginForm = !this.isLoginForm;
    this.userData = { name: '', email: '', password: '', confirmPassword: '', isUserLoggedIn: false };
  }

  login() {
    const user = this.userDataService.getUserData(this.userData.email);

    if (user && user.password === this.userData.password && user.email === this.userData.email) {
      this.userDataService.setUserLoggedIn(this.userData.email);
      alert('Login Successful');
      this.router.navigate(['/dashboard']).then(() => {
        window.location.reload();
      });
      
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }

  signup() {
    // <=== email validation added ===>  
    if (!this.userData.name.trim() || !this.userData.email.trim() || !this.userData.password.trim() || !this.userData.confirmPassword.trim()) {
      alert('All fields are required.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.userData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (this.userData.password !== this.userData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Set isUserLoggedIn to false initially for new users
    this.userData.isUserLoggedIn = false;
    this.userDataService.storeUserData(this.userData);  // Store user data with isUserLoggedIn set to false initially
    alert('Signup Successful');
    this.toggleForm();
  }
}
