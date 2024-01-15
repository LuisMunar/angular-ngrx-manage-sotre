import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { UserInterface } from '../../store/user/user.interface';
import { selectUserData } from '../../store/user/user.reducer';
import { DEFAULT_DATA_USER } from '../../store/user/user.constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  userData: UserInterface

  constructor(
    private store: Store
  ) {
    this.userData = DEFAULT_DATA_USER
  }

  ngOnInit() {
    this.store.pipe(select(selectUserData))
    .subscribe((data) => {
      console.log('DATA => ', data)
      this.userData = data
    })
  }
}
