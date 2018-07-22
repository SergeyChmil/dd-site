import {Component, OnInit} from '@angular/core';
import {AdminFormComponent} from '../admin-form/admin-form.component';
import {BlogPost} from '../../../../interfaces/blog-post';
import {GalleryMetadata} from '../../../../interfaces/gallery-metadata';
import {CommonService} from '../../../../services/common.service';
import {UploadService} from '../../../../services/upload.service';
import {UploadGalleryComponent} from '../../../../shared/upload-gallery/upload-gallery.component';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-create-blog-post',
  templateUrl: './create-blog-post.component.html',
  styleUrls: ['./create-blog-post.component.scss']
})
export class CreateBlogPostComponent extends AdminFormComponent implements OnInit {

  isHeaderPrinted = false;
  isTextPrinted = false;
  _post: BlogPost = new BlogPost();
  chosenGalleryPath = 'blog';
  blogNameInput: any = null;
  blogTextInput: any = null;

  constructor(public cs: CommonService, public us: UploadService) {
    super(us, cs);
  }

  ngOnInit() {
    this.refreshSucceedForm();
  }

  onPostUploadSuccess() {
    this.success.next(`${environment.system_messages.gallery_upload_success}`);
    this.refreshSucceedForm();
  }

  uploadGalleryMetadataCallback() {
    this.uploadPost();
  }

  uploadGallery(uploader: UploadGalleryComponent) {
    if (this.isFilesChosen) {
      uploader.uploadFiles();
    } else {
      this.uploadPost();
    }
  }

  uploadPost() {
    const callback = () => this.onPostUploadSuccess();
    if (!this._post.name) {
      this._post.name = 'Без названия';
    }
    this._post.gallery = this.gm;
    this._post.created = new Date().toDateString();
    this.us.uploadBlogPost(this._post, callback);
  }

  onPostTextDataInputed(postInputField: any) {
    switch (postInputField.id) {
      case 'postNameInput':
        this._post.name = postInputField.value;
        this.isHeaderPrinted = true;
        if (!this.blogNameInput) {
          this.blogNameInput = postInputField;
        }
        break;
      case 'postTextInput':
        this._post.text = postInputField.value;
        this.isTextPrinted = true;
        if (!this.blogTextInput) {
          this.blogTextInput = postInputField;
        }
        break;
    }
  }

  buildGalleryMetadata() {
    const gm = new GalleryMetadata();
    gm.key = this.chosenGalleryKey;
    gm.type = this.cs.getClearString(this.chosenGalleryPath);
    gm.date = new Date().toDateString();
    return gm;
  }

  refreshSucceedForm() {
    if (this.blogTextInput) {
      this.blogTextInput.value = '';
    }
    if (this.blogNameInput) {
      this.blogNameInput.value = '';
    }
    this.chosenGalleryKey = this.cs.getStringKey();
    this.chosenGalleryName = '';
    this.isHeaderPrinted = false;
    this.isTextPrinted = false;
    this.isFilesChosen = false;
    this._post = new BlogPost();
    this.chosenGalleryPath = 'blog';
    this.blogNameInput = null;
    this.blogTextInput = null;
  }

}
