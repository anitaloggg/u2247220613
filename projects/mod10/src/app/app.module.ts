import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MeetingRoomDetailComponent } from './meeting-room-detail/meeting-room-detail.component';
import { MeetingRoomListComponent } from './meeting-room-list/meeting-room-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MeetingRoomDetailComponent,
    MeetingRoomListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
