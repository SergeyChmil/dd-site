import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs/index';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private owner: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.owner = firebaseAuth.authState;
    this.owner.subscribe((_owner) => {
      if (_owner) {
        if (_owner.email === environment.admin.email) {
          this.userDetails = _owner;
          this.router.navigate(['admin']);
          console.log('onwner login data');
          console.log(this.userDetails.email);
        } else {
          this.logout();
        }
      } else {
        console.log('onwner not logged');
        this.userDetails = null;
      }
    });
  }

  signInWithGoogle() {
    return this.firebaseAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  isLoggedIn(): Observable<any> {
    return this.owner;
  }

  logout() {
    this.firebaseAuth.auth.signOut().then((res) => this.router.navigate(['contacts']));
  }
}
