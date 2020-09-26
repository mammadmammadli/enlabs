import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatDialogRef } from '@angular/material/dialog';
import { IOffice } from 'src/app/models/office';
import { ITag } from 'src/app/models/tag';
import { IUser } from 'src/app/models/user';
import { OfficeService } from 'src/app/services/office.service';
import { TagService } from 'src/app/services/tag.service';
import { UserService } from 'src/app/services/user.service';
import { SingleUserComponent } from '../single-user.component';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  @Input() user: IUser;
  @Output() toggleEditMode: EventEmitter<boolean> = new EventEmitter();

  tags: ITag[] = [];
  offices: IOffice[] = [];
  editUserForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    officeId: ['', Validators.required],
    birthDate: ['', Validators.required]
  });
  isLoading = false

  constructor(
    private tagService: TagService,
    private userService: UserService,
    private officeService: OfficeService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<SingleUserComponent>
  ) {}

  ngOnInit(): void {
    const { firstName, lastName, birthDate, phoneNumber, office } = this.user;

    this.editUserForm.setValue({
      firstName,
      lastName,
      phoneNumber,
      birthDate,
      officeId: office.id,
    });
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
      )
      .subscribe(() => {
        console.log('');
      });
  }

  handleSubmit() {
    this.isLoading = true

    this.userService.updateUser(this.editUserForm.value, this.user.id)
      .subscribe(() => {
        this.isLoading = false
        this.dialogRef.close()
      })
  }

  handleOpenRead() {
    this.toggleEditMode.emit(false);
  }
}
