import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrologioService {

  constructor() { }

  getCurrentTime(): Date {
    return new Date();
  }

}