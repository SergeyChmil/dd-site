import {GalleryMetadata} from './gallery-metadata';

export class BlogPost {
  key: string;
  name: string;
  text?: string;
  created: string;
  edited?: string;
  gallery?: GalleryMetadata;

}
