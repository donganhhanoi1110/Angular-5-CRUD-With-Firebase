import { Component, OnInit } from '@angular/core';

import { GuestService } from '../shared/guest.service';
import { Guest } from '../shared/guest.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})
export class GuestListComponent implements OnInit {
  guestList: Guest[];
  constructor(private GuestService: GuestService, private tostr: ToastrService) { }

  ngOnInit() {
    var x = this.GuestService.getData();
    x.snapshotChanges().subscribe(item => {
      this.guestList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.guestList.push(y as Guest);
      });
    });
  }

  onEdit(emp: Guest) {
    this.GuestService.selectedGuest = Object.assign({}, emp);
  }

  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.GuestService.deleteGuest(key);
      this.tostr.warning("Deleted Successfully", "Guest register");
    }
  }

}
