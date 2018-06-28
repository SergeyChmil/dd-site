import {Component, OnInit} from '@angular/core';
import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
// import {map} from 'rxjs/internal/operators';
// import 'rxjs/add/operator/map';
import {map} from 'rxjs/internal/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  mainMenu$: Observable<any>;
  _activeMenuButton: string;

  constructor(private afdb: AngularFireDatabase) {

    this.mainMenu$ = afdb.object(`${environment.keys.mainMenu}`).valueChanges();

    this.mainMenu$.subscribe((data) => {

    });

    // this.mainMenu$ = afdb.list(`${environment.keys.mainMenu}`).snapshotChanges().pipe(map(changes => {
    //   return changes.map(c => ({
    //     key: c.payload.key, ...c.payload.val()
    //   }));
    // }));
  }

  ngOnInit() {

  }

}
