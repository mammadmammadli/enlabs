import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { IOffice } from 'src/app/models/office';
import { OfficeService } from 'src/app/services/office.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.scss'],
})
export class NewuserComponent implements OnInit {
  newuserForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    birthDate: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    officeId: ['', Validators.required],
    companyId: [1],
  });

  isLoading = false;
  offices: IOffice[] = [];

  constructor(
    private fb: FormBuilder,
    private officeService: OfficeService,
    private userService: UserService,
    public dialogRef: MatDialogRef<NewuserComponent>
  ) {}

  ngOnInit(): void {
    this.officeService.getAll(1).subscribe((offices) => {
      this.offices = offices;
    });
  }

  onSubmit() {
    this.isLoading = true;
    if (this.newuserForm.valid) {
      this.userService.create(this.newuserForm.value).subscribe(() => {
        this.isLoading = false;
        this.dialogRef.close();
      });
    }
  }
}
