import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-newtag',
  templateUrl: './newtag.component.html',
  styleUrls: ['./newtag.component.scss'],
})
export class NewtagComponent implements OnInit {
  newTagForm = this.fb.group({
    name: ['', Validators.required],
  });

  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private tagService: TagService,
    public dialogRef: MatDialogRef<NewtagComponent>
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.isLoading = true;
    this.tagService
      .add({ name: this.newTagForm.value['name'] })
      .subscribe((data) => {
        this.isLoading = false;
        this.dialogRef.close(data)
      });
  }
}
