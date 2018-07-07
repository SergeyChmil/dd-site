import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs/index';
import {map} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private as: AuthService) {
  }

  canActivate(): Observable<boolean> {
    return this.as.isLoggedIn().pipe(map(user => {
      console.log('IS LOGGED IN?');
      console.log(Boolean(user));
      return !!user;
    }));
  }
}
