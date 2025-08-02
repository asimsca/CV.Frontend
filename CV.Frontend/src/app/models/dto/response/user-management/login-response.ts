import { MenuItems } from "./menu-items";

export interface LoginResponse {
    email:string;
    name:string;
    role:string;
    token: string;
    refreshToken:string;
    expiresIn:string;
    userTypeId:number;
    menuItems :MenuItems[];
}