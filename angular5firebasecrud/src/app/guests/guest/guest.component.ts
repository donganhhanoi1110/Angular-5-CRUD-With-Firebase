import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { GuestService } from '../shared/guest.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {
  agree: boolean;
  
  constructor(private guestService: GuestService, private tostr: ToastrService) { }

  ngOnInit() {

    this.resetForm();
  }

  onSubmit(guestForm: NgForm) {
    if (guestForm.value.$key == null)
      this.guestService.insertGuest(guestForm.value);
    else
      this.guestService.updateGuest(guestForm.value);
    this.resetForm(guestForm);
    this.tostr.success('Submitted Succcessfully', 'Employee Register');
  }

  resetForm(guestForm?: NgForm) {
    if (guestForm != null)
      guestForm.reset();
    this.guestService.selectedGuest = {
      $key: null,
      name: '',
      message: '',
      agree : false
    }
  }

}
