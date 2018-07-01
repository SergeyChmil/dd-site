import {Component, OnInit} from '@angular/core';
import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
// import {map} from 'rxjs/internal/operators';
// import 'rxjs/add/operator/map';
import {map} from 'rxjs/internal/operators';
import {DataService} from './services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  mainMenu$: Observable<any>;
  galleriesMenu$: Observable<any>;

  constructor(private afdb: AngularFireDatabase, private ds: DataService) {
  }

  ngOnInit() {
    this.mainMenu$ = this.ds.getMainMenuAPI();
    this.galleriesMenu$ = this.ds.getGalleriesAPI();
  }

// TODO: use vars, not plain strings
  checkIsDropDown(pUrl: string): boolean {
    return (pUrl === 'galleries');
  }

  getGalleryURL(galleryUrl): string {
    return `galleries/${galleryUrl}`;
  }

}
