import {Injectable} from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class EncryptionService {
  encryptMode: boolean;
  textToConvert: string;
  password: string;
  conversionOutput: any;

  constructor() {
    this.encryptMode = true;
  }

  changeMode() {
    this.encryptMode = this.encryptMode ? false : true;
    this.textToConvert = '';
  }

  convertText() {
    if (this.textToConvert.trim() === '' || this.password.trim() === '') {
      this.conversionOutput = 'Please fill the textboxes.';
      return;
    } else if (this.encryptMode) {
      this.conversionOutput = CryptoJS.AES.encrypt(this.textToConvert.trim(), this.password.trim()).toString();
    } else {
      this.conversionOutput = CryptoJS.AES.decrypt(this.textToConvert.trim(), this.password.trim()).toString(CryptoJS.enc.Utf8);
    }
  }


}
