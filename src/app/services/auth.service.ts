import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs/index';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/internal/operators';

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
        } else {
          this.logout();
        }
      } else {
        this.userDetails = null;
      }
    });
  }

  signInWithGoogle() {
    return this.firebaseAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  getOwner(): Observable<any> {
    return this.owner;
  }

  isLogged(): Observable<boolean> {
    return this.getOwner().pipe(map(user => {
      return Boolean(user);
    }));
  }

  logout() {
    this.firebaseAuth.auth.signOut().then((res) => this.router.navigate(['contacts']));
  }
}
