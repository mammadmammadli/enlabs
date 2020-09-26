import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/user';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient,
    private commonService: CommonService
  ) { }

  getAll (): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(
      `${this.commonService.baseUrl}/users`
    )
  }

  create (data: Partial<IUser>): Observable<IUser> {
    return this.httpClient.post<IUser>(
      `${this.commonService.baseUrl}/users`,
      data
    )
  }

  addTag (
    data: {
      tagId: number;
      userId: number 
    }
  ) {
    return this.httpClient.post(
      `${this.commonService.baseUrl}/users/add-tag`,
      data
    )
  }

  removeTag (data: {
    tagId: number;
    userId: number 
  }) {
    return this.httpClient.post(
      `${this.commonService.baseUrl}/users/remove-tag`,
      data
    )
  }

  updateUser (data: Partial<IUser>, id: number): Observable<IUser> {
    return this.httpClient.put<IUser>(
      `${this.commonService.baseUrl}/user/${id}`,
      data
    )
  }

  deleteUser (id: number): Observable<void> {
    return this.httpClient.delete<void>(
      `${this.commonService.baseUrl}/user/${id}`,
    )
  }
}
