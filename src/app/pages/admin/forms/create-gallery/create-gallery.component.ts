import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/index';
import {DataService} from '../../../../services/data.service';
import {FileUpload} from '../../../../interfaces/file-upload';
import {UploadFileService} from '../../../../services/upload-file.service';
import * as _ from 'lodash';
import {CommonService} from '../../../../services/common.service';
import {GalleryMetadata} from '../../../../interfaces/gallery-metadata';


@Component({
  selector: 'app-create-gallery',
  templateUrl: './create-gallery.component.html',
  styleUrls: ['./create-gallery.component.scss'],
})
export class CreateGalleryComponent implements OnInit {

  public state = 'inactive';
  chosenGallery = 'Выбрать раздел';
  chosenGalleryPath = '';
  chosenGalleryKey = '';
  chosenGalleryName = '';
  isGalleryChosen = false;
  isGalleryNamed = false;
  isFilesChosen = false;
  filesLoaded = 0;
  galleryNameInput: any = null;
  galleries$: Observable<any>;

  selectedFiles: FileList;
  currentUpload: FileUpload;
  progress: { percentage: number } = {percentage: 0};

  constructor(private ds: DataService, private us: UploadFileService, private cs: CommonService) {
    this.galleries$ = this.ds.getGalleriesAPI();
  }

  ngOnInit() {
  }

  uploadGalleryMetadata() {
    const callback = () => this.refreshSucceedForm();
    const gm = new GalleryMetadata();
    gm.name = this.chosenGalleryName;
    gm.key = this.chosenGalleryKey;
    gm.type = this.chosenGalleryPath;
    this.us.saveGalleryMetadata(this.chosenGalleryPath, gm, callback);
  }

  uploadGallery() {
    const callback = () => {
      this.filesLoaded++;
      if (this.filesLoaded === this.selectedFiles.length) {
        this.uploadGalleryMetadata();
      }
    };

    const files = this.selectedFiles;
    const filesIndex = _.range(files.length);
    const fullGalleryPath = `${this.chosenGalleryPath}/${this.chosenGalleryKey}`;
    _.each(filesIndex, (idx) => {
      this.currentUpload = new FileUpload(files[idx]);
      this.us.uploadFileToStorage(this.currentUpload, this.progress, fullGalleryPath, callback);
    });
  }

  onGalleryNameChanged(inputField: any) {
    this.galleryNameInput = inputField;
    this.chosenGalleryKey = this.cs.getStringKey();
    this.chosenGalleryName = this.cs.getClearString(inputField.value);
    this.galleryNameInput.value = this.chosenGalleryName;
    this.isGalleryNamed = Boolean(this.chosenGalleryName.length);
  }

  onGallerySelect(chosenGallery: string, chosenGalleryPath: string) {
    this.chosenGallery = chosenGallery;
    this.chosenGalleryPath = chosenGalleryPath;
    this.isGalleryChosen = true;
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
    this.isFilesChosen = true;
  }

  refreshSucceedForm() {
    this.chosenGallery = 'Выбрать раздел';
    this.chosenGalleryPath = '';
    this.chosenGalleryKey = '';
    this.chosenGalleryName = '';
    this.galleryNameInput.value = '';
    this.isGalleryChosen = false;
    this.isGalleryNamed = false;
    this.isFilesChosen = false;
    this.filesLoaded = 0;
    this.progress = {percentage: 0};
    this.selectedFiles = null;
    this.currentUpload = null;
  }

  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }

}
