import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
// import {map} from 'rxjs/internal/operators';
// import 'rxjs/add/operator/map';
import {map} from 'rxjs/internal/operators';
import {FeedbackMessage} from '../interfaces/FeedbackMessage';
import Reference = firebase.database.Reference;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afdb: AngularFireDatabase) {
  }

  getContactsAPI(): Observable<any> {
    return this.afdb.object(`${environment.keys.contactsData}`).valueChanges();
  }

  getMainMenuAPI(): Observable<any> {
    return this.afdb.object(`${environment.keys.mainMenu}`).valueChanges();
  }

  getGalleriesAPI(): Observable<any> {
    return this.afdb.object(`${environment.keys.galleriesMenu}`).valueChanges();
  }

  setNewFeedbackMessage(fm: FeedbackMessage): void {
    const newId: string = (this.afdb.list(`${environment.keys.feedbackMessages}`).push(fm)).key;
    this.afdb.list(`${environment.keys.newFeedbackMessagesList}`).push(newId);
    const allNewMessages = this.afdb.object(`${environment.keys.newFeedbackMessagesList}`).valueChanges();
    allNewMessages.subscribe((data) => {
      console.log(data);
    });
    // this.afdb.list('/courses').push({title: 'Test NEW Title'});
    // return true;
  }
}
