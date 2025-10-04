import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { LoginResponse } from 'src/app/models/dto/response/user-management/login-response';
import { LoginRequest } from 'src/app/models/dto/request/user-management/login-request';
import { CommonService } from 'src/app/services/common/common.service';
import { SweetAlertService } from 'src/app/shared/services/sweet-alert.service';
import { RegexPatterns } from 'src/app/validators/regex-patterns';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage = '';
  isLoginSuccessful = false;
  isOTPEnabled: boolean = false;
  isPasswordHide = true;
  minPasswordLength = 8;
  passwordRegex = '';
  loginResponse!: LoginResponse;
  msg: string = '';
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private commonService: CommonService,
    private sweetAlertService:SweetAlertService,
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  // ngOnInit(): void {
  //   ;
  //   const tokenValue = this.authenticationService.JwtToken;
  //   if (tokenValue) {
  //     this.router.navigate(['home']);
  //   }
  // }

  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  };

  public removeError() {
    this.errorMessage = '';
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {

    this.errorMessage = '';

    let loginObj: LoginRequest = {
      userName: this.loginForm.controls['username'].value,
      password: this.loginForm.controls['password'].value,
    };

    this.authenticationService.login(loginObj).subscribe((resp) => {
      if (resp.isSuccess) {
        this.loginResponse = resp.data;
          //in case of OTP disbaled
          this.isLoginSuccessful = resp.isSuccess;
          this.authenticationService.JwtToken = resp.data.accessToken;
          this.authenticationService.refreshToken = resp.data.refreshToken;
          // this.authenticationService.setMenuItems(resp.data.menuItems);
          this.router.navigate(['home']);
              this.sweetAlertService.showSuccess("Success", resp.message)          
      } else {
        this.sweetAlertService.showError('Failed',resp.message);
      }
    });
  }
}