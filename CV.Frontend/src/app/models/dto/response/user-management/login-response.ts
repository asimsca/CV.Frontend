import { MenuItems } from "./menu-items";

export interface LoginResponse {

    name:string;
    accessToken:string;
    refreshToken:string;
    isOtpEnable:boolean;

    // email:string;
    // role:string;
    // token: string;
    // refreshToken:string;
    // expiresIn:string;
    // userTypeId:number;
    // menuItems :MenuItems[];
}