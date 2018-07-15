import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() {
  }

  getStringKey(): string {
    return Math.random().toString(36).substring(2);
  }

  getClearString(str: string): string {
    const a = {
      '.': ' ',
      '#': ' ',
      '$': ' ',
      '/': ' ',
      '[': ' ',
      ']': ' ',
    };
    return str.split('').map(function (char) {
      return a[char] || char;
    }).join('').trim();
  }
}
