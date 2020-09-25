import { Component, OnInit } from '@angular/core';
import { IOffice } from 'src/app/models/office';
import { OfficeService } from 'src/app/services/office.service';

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.scss']
})
export class OfficesComponent implements OnInit {

  constructor(private officeService: OfficeService) { }
  offices: IOffice[] = []

  ngOnInit(): void {
    this.officeService.getAll(1).subscribe(offices => {
      this.offices = offices;
    })
  }

  deleteOffice(id: number): void {
    this.officeService.delete(id).subscribe(() => {
      this.offices = this.offices.filter(office => office.id !== id);
    })
  }

}
