import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { SweetAlertService } from 'src/app/shared/services/sweet-alert.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  isUserLoggedin = false;

  constructor(private authSerice : AuthenticationService, private sweetAlertService : SweetAlertService){}

  ngOnInit(): void {
    
    const tokenValue = this.authSerice.JwtToken;
    if (tokenValue) {
      this.isUserLoggedin = true;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout(){
    this.authSerice.logout();
    this.isUserLoggedin = false;
    this.sweetAlertService.showSuccess("Logout", "User Logged out success.")
  }
}
