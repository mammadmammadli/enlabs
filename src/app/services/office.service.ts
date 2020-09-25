import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOffice } from '../models/office';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class OfficeService {
  constructor(private commonService: CommonService, private http: HttpClient) {}

  create(data: { city: string; companyId: number }): Observable<IOffice> {
    return this.http.post<IOffice>(
      `${this.commonService.baseUrl}/offices`,
      data
    );
  }

  getAll(companyId?: number): Observable<IOffice[]> {
    let url = `${this.commonService.baseUrl}/offices`;
    if (companyId) {
      url += `?companyId=${companyId}`;
    }

    return this.http.get<IOffice[]>(url);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.commonService.baseUrl}/office/${id}`);
  }
}
