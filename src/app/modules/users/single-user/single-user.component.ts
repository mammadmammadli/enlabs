import { EventEmitter } from '@angular/core';
import { Component, Inject, OnInit, Output } from '@angular/core';
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
  @Output() updatedUser = new EventEmitter<IUser>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public user: IUser,
    private tagService: TagService,
    private userService: UserService,
    private officeService: OfficeService
  ) {}

  tags: ITag[] = [];
  offices: IOffice[] = [];

  ngOnInit(): void {
    this.tagService.getAll().subscribe((tags) => {
      this.tags = tags;
    });

    this.officeService.getAll(1).subscribe((offices) => {
      this.offices = offices;
    });
  }

  isUserHasTag(tagId: number): boolean {
    if (this.user.tags.find((tag) => tag.id === tagId)) return true;
    return false;
  }

  remove(tag: ITag) {
    this.userService
      .removeTag({
        tagId: tag.id,
        userId: this.user.id,
      })
      .subscribe(() => {
        this.user.tags = this.user.tags.filter((_tag) => _tag.id != tag.id);
      });
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const tagId = event.option.value;

    this.userService
      .addTag({
        tagId,
        userId: this.user.id,
      })
      .subscribe(() => {
        this.user.tags.push(this.tags.find((tag) => tag.id == parseInt(tagId)));
      });
  }

  selectOffice(office: IOffice): void {
    this.userService
      .updateUser(
        {
          officeId: office.id,
        },
        this.user.id
      ).subscribe(() => {
        console.log('')
      })
  }
}
