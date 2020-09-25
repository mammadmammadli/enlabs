import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { OfficeService } from 'src/app/services/office.service';

@Component({
  selector: 'app-newoffice',
  templateUrl: './newoffice.component.html',
  styleUrls: ['./newoffice.component.scss'],
})
export class NewofficeComponent implements OnInit {
  newofficeForm = this.fb.group({
    city: ['', Validators.required],
  });

  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private officeService: OfficeService,
    public dialogRef: MatDialogRef<NewofficeComponent>
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.officeService
      .create({
        companyId: 1,
        city: this.newofficeForm.value['city'],
      })
      .subscribe((data) => {
        this.isLoading = false;
        this.dialogRef.close(data)
      });
  }
}
