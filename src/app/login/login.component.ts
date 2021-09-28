import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username!: string;
  password!: string;
  signingUp!: boolean;
  messageSuccess!: string;
  errors: String[] = [];

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  onSubmit() {
    this.router.navigate(['/home']);
  }

  prepareSigningUp(event: {
    preventDefault: () => void;
  }) {
    event.preventDefault();
    this.signingUp = true;
  }

  unsubscribe() {
    this.signingUp = false;
  }

  register() {
    const user: User = new User();
    user.usernameUser = this.username;
    user.passwordUser = this.password;
    this.authService.insertUser(user).subscribe(response => {
      this.messageSuccess = "Registration performed successfully. Log in.";
      this.signingUp = false;
      this.username = "";
      this.password = "";
      this.errors = [];

    }, errorResponse => {
      this.messageSuccess = "";
      this.errors = errorResponse.error.errors;
    });
  }

}
