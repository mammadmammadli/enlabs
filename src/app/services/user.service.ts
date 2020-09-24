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
}
