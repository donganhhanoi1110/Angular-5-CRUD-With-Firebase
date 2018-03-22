import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { GuestComponent } from './guests/guest/guest.component';
import { GuestListComponent } from './guests/guest-list/guest-list.component';
import { ToastrModule } from 'ngx-toastr';
import { GuestsComponent } from './guests/guests.component';
import { GuestService } from './guests/shared/guest.service';


@NgModule({
  declarations: [
    AppComponent,
    GuestsComponent,
    GuestComponent,
    GuestListComponent,
    GuestsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [GuestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
