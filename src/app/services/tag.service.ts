import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITag } from '../models/tag';
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
}
