import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { updateUser } from '../../store/user/user.actions';
import USER_MOCK from '../../constants/user-mock';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string
  password: string

  constructor(
    private store: Store,
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
    this.store.dispatch(updateUser({ userData: USER_MOCK }));
    this.router.navigate(['/dashboard'])
  }
}
