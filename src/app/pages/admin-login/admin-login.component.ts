import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  constructor(private as: AuthService) {
  }

  ngOnInit() {
  }

  googleLogin() {
    this.as.signInWithGoogle();
  }

  logout() {
    this.as.logout();
  }

}
