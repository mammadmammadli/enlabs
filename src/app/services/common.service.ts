import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public baseUrl = 'http://localhost:4300'

  constructor() { }
}
