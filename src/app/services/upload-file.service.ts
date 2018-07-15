import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {FileUpload} from '../interfaces/file-upload';
import {AngularFireDatabase} from 'angularfire2/database';
import {GalleryMetadata} from '../interfaces/gallery-metadata';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  private basePath = '/uploads';

  constructor(private db: AngularFireDatabase) {
  }

  // использовать для загрузки фото
  uploadFileToStorage(fileUpload: FileUpload, progress: { percentage: number }, galleryPath: string,
                      cbSuccess: Function = null, cbError: Function = null) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${galleryPath}/${fileUpload.file.name}`).put(fileUpload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, (snapshot) => {
        const snap = snapshot as firebase.storage.UploadTaskSnapshot;
        progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
      },
      (error) => {
        if (cbError) {
          cbError();
        }
        console.log(error);
      },
      () => {
        fileUpload.url = uploadTask.snapshot.metadata.fullPath;
        fileUpload.name = uploadTask.snapshot.metadata.name;
        this._saveFileMetadata(fileUpload, galleryPath);
        if (cbSuccess) {
          cbSuccess();
        }
      });
  }

  saveGalleryMetadata(galleryPath: string, galleryData: GalleryMetadata, cb: Function) {
    const dataUploadListener = this.db.list(`${environment.keys.galleriesMetadata}`).snapshotChanges();
    dataUploadListener.subscribe(() => cb());
    this.db.list(`${environment.keys.galleriesMetadata}/`).push(galleryData);
  }

  deleteFileFromStorage() {
  }

  deleteGalleryMetadata() {
  }

  _deleteFileMetadata() {
  }

  // сохраняет метаданные загруженной фотографии
  _saveFileMetadata(fileUpload: FileUpload, galleryPath: string) {
    this.db.list(`${this.basePath}/${galleryPath}`).push(fileUpload);
  }

}
