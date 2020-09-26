import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'app-read-user',
  templateUrl: './read-user.component.html',
  styleUrls: ['./read-user.component.scss'],
})
export class ReadUserComponent implements OnInit {
  @Input() user: IUser;
  @Output() toggleEditMode: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleOpenEdit() {
    this.toggleEditMode.emit(true);
  }
}
