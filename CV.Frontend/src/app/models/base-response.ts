import { HttpStatusCode } from '@angular/common/http';
export interface BaseResponse<T>{
isSuccess : boolean;
responseCode : HttpStatusCode;
message : string
data : T;
}