import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  login() {

    //login  api ...  true false..
    
    return true;

  }
  userName  = new Subject<any>();
}
