import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MeetingRoom } from '../shared/meeting-room';
import { MeetingRoomService } from '../shared/meeting-room.service';

@Component({
  selector: 'app-meeting-room-list',
  templateUrl: './meeting-room-list.component.html',
  styles: [
  ]
})
export class MeetingRoomListComponent implements OnInit {

  constructor(public service: MeetingRoomService, private toastr: ToastrService) { }
  ngOnInit() {
    this.service.getList();
  }
  public populateForm(mr: MeetingRoom) {
    this.service.formData = Object.assign({}, mr);  //  mr ;
  }
  onInsert() {
    this.service.formData = new MeetingRoom();
  }

  onDelete(mr: MeetingRoom) {
    if (confirm(`確定刪除 會議室:${mr.name} 資料卡?`)) {
      this.service.deleteMeetingRoom(mr.id).subscribe(
        resp => {
          this.toastr.success('刪除成功', '會議室資料卡')
          this.service.getList();
        }, err => {
          console.log(err);
        }
      );
    }
  }

}
