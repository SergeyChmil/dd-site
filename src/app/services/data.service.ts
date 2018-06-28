import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
// import {map} from 'rxjs/internal/operators';
// import 'rxjs/add/operator/map';
import {map} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afdb: AngularFireDatabase) {
  }


}
