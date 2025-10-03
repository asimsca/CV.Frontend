import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';

@Component({
  selector: 'app-landing-layout',
  templateUrl: './landing-layout.component.html',
  styleUrls: ['./landing-layout.component.scss']
})
export class LandingLayoutComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
        private router: Router,
  
  ) { }
  ngOnInit(): void {
    
    const tokenValue = this.authenticationService.JwtToken;
    if (!tokenValue) {
      this.router.navigate(['auth']);
    }
  }
}
