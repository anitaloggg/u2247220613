import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MeetingRoom } from './meeting-room';

@Injectable({
  providedIn: 'root'
})
export class MeetingRoomService {
  public formData = new MeetingRoom();
  readonly rootUrl = 'https://localhost:44356/MeetingRooms'
  public list: MeetingRoom[] = [];

  constructor(private http: HttpClient) { }

  getList() {
    this.http.get<MeetingRoom[]>(this.rootUrl)
      .subscribe(resp => this.list = resp);
  }
  postMeetingRoom() {
    return this.http.post(this.rootUrl, this.formData);
  }
  putMeetingRoom() {
    return this.http.put(this.rootUrl + '/' + this.formData.id, this.formData);
  }
  deleteMeetingRoom(id: number) {
    return this.http.delete(this.rootUrl + '/' + id);
  }

}
