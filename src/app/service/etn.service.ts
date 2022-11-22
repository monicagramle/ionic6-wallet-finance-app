import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { data } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class EtnService {

  constructor(private http: HttpClient) { }

  getData() : any{
    return this.http.get('https://3130fecd1ca985e8920d33e1481d4461.m.pipedream.net/');
  }
}
