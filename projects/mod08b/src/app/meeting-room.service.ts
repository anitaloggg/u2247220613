import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MeetingRoom, MeetingRooms } from './meeting-room';

@Injectable({
  providedIn: 'root'
})
export class MeetingRoomService {
  url = "../assets/data/meetingRoom.json";

  constructor(private httpClient:HttpClient) { }

  getMeetingRooms(){
    return this.httpClient.get<MeetingRoom[]>(this.url); ;
  };

}
