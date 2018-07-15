import { Component, OnInit } from '@angular/core';
import {FileUpload} from '../../interfaces/file-upload';
import {UploadFileService} from '../../services/upload-file.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  animations: [
    trigger('formState', [
      state('inactive', style({
        height: '3rem'
      })),
      state('active', style({
        height: '20rem'
      })),
      transition('inactive => active', animate('100ms')),
      transition('active => inactive', animate('50ms')),
    ])
  ]
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
