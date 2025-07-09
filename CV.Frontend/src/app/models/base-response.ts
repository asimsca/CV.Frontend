import { HttpStatusCode } from '@angular/common/http';
export interface BaseResponse<T>{
IsSuccess : boolean;
ResponseCode : HttpStatusCode;
Message : string
Data : T;
}