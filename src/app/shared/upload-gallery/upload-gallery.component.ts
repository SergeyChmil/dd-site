import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FileUpload} from '../../interfaces/file-upload';
import * as _ from 'lodash';
import {UploadService} from '../../services/upload.service';

@Component({
  selector: 'app-upload-gallery',
  templateUrl: './upload-gallery.component.html',
  styleUrls: ['./upload-gallery.component.scss']
})

export class UploadGalleryComponent implements OnInit {
  @Input() chosenGalleryPath: string;
  @Input() chosenGalleryKey: string;
  filesLoaded = 0;
  selectedFiles: FileList;
  currentUpload: FileUpload;
  progress: { percentage: number } = {percentage: 0};
  @Output() loaded = new EventEmitter<boolean>();
  @Output() filesChosen = new EventEmitter<boolean>();

  constructor(private us: UploadService) {
  }

  ngOnInit() {
  }

  /**
   * Uploads files to the server, sending out signal when last file has been uploaded
   */
  uploadFiles() {
    const callback = () => {
      this.filesLoaded++;
      if (this.filesLoaded === this.selectedFiles.length) {
        // signal to parent telling that all chosen files were loaded, executed second
        this.loaded.emit(true);
        this.clearData();
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


  /**
   * Temporary saving names of chosed files, sending out signal that files have been chosed
   * @param event
   */
  detectFiles(event) {
    this.selectedFiles = event.target.files;
    // signal to parent telling that some files were chosen, executed first
    this.filesChosen.emit(true);
  }

  /**
   * Clears all necessary local variables
   */
  clearData() {
    this.filesLoaded = 0;
    this.progress = {percentage: 0};
    this.selectedFiles = null;
    this.currentUpload = null;
  }

}
