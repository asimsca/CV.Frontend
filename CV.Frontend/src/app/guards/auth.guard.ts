import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
} from '@angular/router';
import { AuthenticationService } from '../services/auth/authentication.service';
import { AuthGuradHelperService } from '../services/auth/authorize-helper.service';
import { SweetAlertService } from '../shared/services/sweet-alert.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private sweetAlertService:SweetAlertService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let authGuradHelper: AuthGuradHelperService = new AuthGuradHelperService(
      this.authenticationService
    );
    const tokenValue = this.authenticationService.JwtToken;
    if (tokenValue) {
      //in case menu has no access to user
      if (!authGuradHelper.hasPagePermission(state)) {
        this.sweetAlertService.showError('Failure', 'Permission Denied OR Page Not Found');

        this.router.navigate(['dashboard']);
        return false;
      }
      // authorised so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['login']);
    return false;
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const tokenValue = this.authenticationService.JwtToken;
    if (tokenValue) {
      // authorised so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}