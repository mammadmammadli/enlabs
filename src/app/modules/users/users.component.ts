import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { IUser } from '../../models/user';
import { UserService } from '../../services/user.service';
import { SingleUserComponent } from './single-user/single-user.component';
import { UsersDataSource, UsersItem } from '../../modules/users/users-datasource';

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
  displayedColumns = ['id', 'firstName', 'lastName', 'office', 'phoneNumber', 'tags'];

  constructor(
    private userService: UserService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.dataSource = new UsersDataSource();
    this.fetchUsers()
  }

  fetchUsers (): void {
    this.userService.getAll().subscribe(data => {
      this.table.dataSource = data;
    })
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.table.dataSource = this.dataSource;
  }

  onClick(user) {
    const dialogRef = this.dialog.open(SingleUserComponent, {
      height: '700px',
      width: '600px',
      data: user
    })

    dialogRef.afterClosed().subscribe(
      () => {
        this.fetchUsers()
      }
    )
  }
}
