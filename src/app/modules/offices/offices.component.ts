import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IOffice } from 'src/app/models/office';
import { OfficeService } from 'src/app/services/office.service';
import { NewofficeComponent } from './newoffice/newoffice.component';

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.scss']
})
export class OfficesComponent implements OnInit {

  constructor(private officeService: OfficeService, public dialog: MatDialog) { }
  offices: IOffice[] = []

  ngOnInit(): void {
    this.officeService.getAll(1).subscribe(offices => {
      this.offices = offices;
    })
  }

  openNewOfficeModal(): void {
    const newOfficeRef = this.dialog.open(NewofficeComponent, {
      height: '300px',
      width: '300px',
    });

    newOfficeRef.afterClosed().subscribe((data: IOffice) => {
      if (data) {
        this.offices.push(data)
      }
    })
  }

  deleteOffice(id: number): void {
    this.officeService.delete(id).subscribe(() => {
      this.offices = this.offices.filter(office => office.id !== id);
    })
  }

}
