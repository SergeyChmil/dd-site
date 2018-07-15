import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/index';
import {DataService} from '../../services/data.service';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {

  prices$: Observable<any>;

  constructor(private ds: DataService) { }

  ngOnInit() {
    this.prices$ = this.ds.getPricesAPI();
  }

}
