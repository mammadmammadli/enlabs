import { Component, Inject, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IOffice } from 'src/app/models/office';
import { ITag } from 'src/app/models/tag';
import { IUser } from 'src/app/models/user';
import { OfficeService } from 'src/app/services/office.service';
import { TagService } from 'src/app/services/tag.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss'],
})
export class SingleUserComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public user: IUser,
  ) {}

  editMode = false;
  tags: ITag[] = [];
  offices: IOffice[] = [];

  ngOnInit(): void { }

  handleEditMode(): void {
    this.editMode = !this.editMode;
  }

  toggleEditMode(editMode: boolean) {
    this.editMode = editMode
  }

}
