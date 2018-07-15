import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/index';
import {DomSanitizer} from '@angular/platform-browser';
import {faFacebookSquare, faInstagram, faPinterest} from '@fortawesome/free-brands-svg-icons/';
import {DataService} from '../../services/data.service';
import {FeedbackMessage} from '../../interfaces/feedback-message';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contacts$: Observable<any>;
  faFacebookSquare = faFacebookSquare;
  faInstagram = faInstagram;
  faPinterest = faPinterest;

  model: FeedbackMessage = new FeedbackMessage;

  constructor(private sanitizer: DomSanitizer, private ds: DataService) {}

  ngOnInit() {
    this.contacts$ = this.ds.getContactsAPI();
  }

  // without this modern browsers marks link as unsafe and deprecates the connection
  trustedSkypeURL(pUrl: string) {
    return this.sanitizer.bypassSecurityTrustUrl(`skype:${pUrl}?chat`);
  }

  //todo: marked for delete
  onSubmit() {
    this.model.id = this.model.timestamp = Date.now();
    this.ds.saveNewFeedbackMessage(this.model);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }

}
