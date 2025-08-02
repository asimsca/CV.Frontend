import { Injectable } from '@angular/core';
import { RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { MenuItems } from 'src/app/models/dto/response/user-management/menu-items';

@Injectable()
export class AuthGuradHelperService {
  constructor(private authenticationService: AuthenticationService) {}

  /**
   * Determines whether Logged in User has Permision of routed route
   * @param route RouterStateSnapshot
   * @returns Boolean if route has permission.
   *
   */
  hasPagePermission(route: RouterStateSnapshot): boolean {
    let url: string = route.url;
    const cleanUrl = url.split('?')[0]; // Remove everything after '?'
    url = cleanUrl;

    let menuItems: MenuItems[];
    let isVerify: boolean = false;
    menuItems = JSON.parse(localStorage.getItem('coinEngineMenuItems') || '{}');

    menuItems.forEach((x) => {
      if (x.menuUrl.trim().toLowerCase() == url.trim().toLowerCase()) {
        isVerify = true;
      }
      //aslo to check that route in childs if available
      x.children.forEach((y) => {
        if (y.menuUrl.trim().toLowerCase() == url.trim().toLowerCase()) {
          isVerify = true;
        }

        y.children.forEach((z) => {
          if (z.menuUrl.trim().toLowerCase() == url.trim().toLowerCase()) {
            isVerify = true;
          }
        });
      });
    });
    return isVerify;
  }
}