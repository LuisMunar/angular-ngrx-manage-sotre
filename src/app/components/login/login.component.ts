import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string
  password: string

  constructor(
    private router: Router
  ) {
    this.username = ''
    this.password = ''
  }

  handleLogin() {
    console.log('FORM_DATA=> ', {
      username: this.username,
      password: this.password
    })
    this.router.navigate(['/dashboard'])
  }
}
