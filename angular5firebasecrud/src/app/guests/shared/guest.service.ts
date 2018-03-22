import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Guest} from './guest.model';
@Injectable()
export class GuestService {
  guestList: AngularFireList<any>;
  selectedGuest: Guest = new Guest();
  constructor(private firebase :AngularFireDatabase ) { }

  getData(){
    this.guestList = this.firebase.list('guests');
    return this.guestList;
  }

  insertGuest(guest : Guest)
  {
    this.guestList.push({
      name: guest.name,
      message: guest.message,
      agree : guest.agree
    });
  }

  updateGuest(guest : Guest){
    this.guestList.update(guest.$key,
      {
        name: guest.name,
        message: guest.message,
        agree : guest.agree
      });
  }

  deleteGuest($key : string){
    this.guestList.remove($key);
  }

}
