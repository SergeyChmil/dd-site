import {Component, Input, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-alert-selfclosing',
  templateUrl: 'alert-self-closing.component.html'
})
export class AlertSelfClosingComponent implements OnInit {
  @Input() success: Subject<string>;

  successMessage: string;

  ngOnInit(): void {
    this.success.subscribe((message) => this.successMessage = message);

    this.success.pipe(debounceTime(5000))
      .subscribe(() => this.successMessage = null);
  }
}
