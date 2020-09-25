import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDate } from '../models/common';
import { ITag, ITagRq } from '../models/tag';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private commonService: CommonService, private http: HttpClient) { }

  getAll (): Observable<ITag[]> {
    return this.http.get<ITag[]>(
      `${this.commonService.baseUrl}/tags`
    )
  }

  add (data: ITagRq): Observable<ITagRq & IDate> {
    return this.http.post<ITagRq & IDate>(
      `${this.commonService.baseUrl}/tags`,
      data
    )
  }
}
