import {Component, OnInit, Output} from '@angular/core';
import {UploadGalleryComponent} from '../../../../shared/upload-gallery/upload-gallery.component';
import {GalleryMetadata} from '../../../../interfaces/gallery-metadata';
import {CommonService} from '../../../../services/common.service';
import {UploadService} from '../../../../services/upload.service';
import {environment} from '../../../../../environments/environment';
import {Subject} from 'rxjs/index';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.scss']
})
export class AdminFormComponent implements OnInit {

  public state = 'inactive';
  @Output() chosenGalleryPath = '';
  @Output() chosenGalleryKey = '';
  public chosenGalleryName = '';
  public isFilesChosen = false;
  public success: Subject<string> = new Subject<string>();
  public gm: GalleryMetadata = null;

  constructor(public us: UploadService, public cs: CommonService) {
  }

  ngOnInit() {
  }

  buildGalleryMetadata(): GalleryMetadata {
    return new GalleryMetadata();
  }

  uploadGalleryMetadataCallback() {
    this.success.next(`${environment.system_messages.gallery_upload_success}`);
    this.refreshSucceedForm();
  }

  /***
   * Upload gallery metadata
   * @callback initiate success alert message displaying
   */
  uploadGalleryMetadata() {
    const callback = () => this.uploadGalleryMetadataCallback();
    this.gm = this.buildGalleryMetadata();
    this.us.saveGalleryMetadata(this.chosenGalleryPath, this.gm, callback);
  }

  /**
   * Initiate uploading chosen files to server
   * @param uploader{UploadGalleryComponent} link to the uploader component
   */
  uploadGallery(uploader: UploadGalleryComponent) {
    uploader.uploadFiles();
  }

  /**
   * Changing states of component for the angular animations
   */
  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }

  /**
   * handler of chosing files complete event
   */
  onFilesChosen() {
    this.isFilesChosen = true;
  }

  /**
   * handler of files uploading complete event
   */
  onFilesLoaded() {
    this.uploadGalleryMetadata();
  }

  refreshSucceedForm() {

  }

}
