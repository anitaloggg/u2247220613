import { Component, OnInit } from '@angular/core';
import { MeetingRoom } from '../meeting-room';
import { MeetingRoomService } from '../meeting-room.service';

@Component({
  selector: 'app-meeting-room',
  templateUrl: './meeting-room.component.html',
  styles: [
  ]
})
export class MeetingRoomComponent implements OnInit {

  meetingRooms : MeetingRoom[]=[];
  constructor(private mrService : MeetingRoomService ) { 
      this.mrService.getMeetingRooms().subscribe(
        resp => this.meetingRooms =  resp  , 
        err => console.log(err) )
    }
  

  ngOnInit(): void {
  }

}
