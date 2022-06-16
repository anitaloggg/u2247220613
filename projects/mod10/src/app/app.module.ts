import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { MeetingRoomDetailComponent } from './meeting-room-detail/meeting-room-detail.component';
import { MeetingRoomListComponent } from './meeting-room-list/meeting-room-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MeetingRoomDetailComponent,
    MeetingRoomListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(
      {positionClass: 'toast-center-center'}

    ),
    BrowserAnimationsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
