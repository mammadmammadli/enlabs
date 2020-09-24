import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { IUser } from '../models/user';
import { UserService } from '../services/user.service';
import { UsersDataSource, UsersItem } from './users-datasource';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<IUser>;
  dataSource: UsersDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'firstName', 'lastName', 'office', 'phoneNumber'];

  constructor (private userService: UserService) {}

  ngOnInit() {
    this.dataSource = new UsersDataSource();
    this.userService.getAll().subscribe(data => {
      this.table.dataSource = data;
    })
  }

  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.table.dataSource = this.dataSource;
  }

  onClick (row) {
    console.log(row)
  }
}
