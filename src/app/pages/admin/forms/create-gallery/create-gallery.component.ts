import {Component} from '@angular/core';
import {Observable, Subject} from 'rxjs/index';
import {DataService} from '../../../../services/data.service';
import {UploadService} from '../../../../services/upload.service';
import {CommonService} from '../../../../services/common.service';
import {GalleryMetadata} from '../../../../interfaces/gallery-metadata';
import {AdminFormComponent} from '../admin-form/admin-form.component';
import {UploadGalleryComponent} from '../../../../shared/upload-gallery/upload-gallery.component';
import {environment} from '../../../../../environments/environment';


@Component({
  selector: 'app-create-gallery',
  templateUrl: './create-gallery.component.html',
  styleUrls: ['./create-gallery.component.scss'],
})
export class CreateGalleryComponent extends AdminFormComponent {

  chosenGallery = 'Выбрать раздел';
  isGalleryChosen = false;
  isGalleryNamed = false;
  galleryNameInput: any = null;
  galleries$: Observable<any>;

  constructor(private ds: DataService, public us: UploadService, public cs: CommonService) {
    super(us, cs);
    this.galleries$ = this.ds.getGalleriesAPI();
  }

  buildGalleryMetadata() {
    const gm = new GalleryMetadata();
    gm.name = this.chosenGalleryName;
    gm.key = this.chosenGalleryKey;
    gm.type = this.chosenGalleryPath;
    gm.date = new Date().toDateString();
    return gm;
  }

  /**
   * Save inputed galery name, generate gallery key identifier
   * @param inputField link to the input gallery name field, for future clearing
   */
  onGalleryNameChanged(inputField: any) {
    this.galleryNameInput = inputField;
    this.chosenGalleryKey = this.cs.getStringKey();
    this.chosenGalleryName = this.cs.getClearString(inputField.value);
    this.galleryNameInput.value = this.chosenGalleryName;

    this.isGalleryNamed = Boolean(this.chosenGalleryName.length);
  }

  /**
   * Choosing new gallery type, saving global gallery path in future metadata
   * @param {string} chosenGallery - used in template only
   * @param {string} chosenGalleryPath
   */
  onGallerySelect(chosenGallery: string, chosenGalleryPath: string) {
    this.chosenGallery = chosenGallery;
    this.chosenGalleryPath = chosenGalleryPath;

    this.isGalleryChosen = true;
  }

  /**
   * Clear all inputed and generated data, preparing for new cycle
   */
  refreshSucceedForm() {
    this.chosenGallery = 'Выбрать раздел';
    this.chosenGalleryPath = '';
    this.chosenGalleryKey = '';
    this.chosenGalleryName = '';
    this.galleryNameInput.value = '';
    this.isGalleryChosen = false;
    this.isGalleryNamed = false;
    this.isFilesChosen = false;
  }

}
