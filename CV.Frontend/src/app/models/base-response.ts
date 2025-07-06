export interface BaseResponse<T>{
IsSuccess : boolean;
ResponseCode : HttpStatusCode;
Message : string
Data : T;
}