import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { data } from 'jquery';
import { map, Observable } from 'rxjs';
import { BaseResponse } from 'src/app/models/base-response';
import { AddCvRequest } from 'src/app/models/dto/request/cv/add-cv-request';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor(private http:HttpClient) { }


  addCv(object : AddCvRequest) : Observable<BaseResponse<string>>{
    debugger;
    let uri = `${environment.baseAPIUrl}/Cv/AddCv`;
    return this.http.post<BaseResponse<string>>(uri, object).pipe(map(data => <BaseResponse<string>> data));
  }
}
