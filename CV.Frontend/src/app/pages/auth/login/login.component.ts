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
export class LoginComponent implements OnInit {
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
      email: ['', [Validators.required, Validators.pattern(RegexPatterns.emailPattern)]],
      password: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    ;
    const tokenValue = this.authenticationService.JwtToken;
    if (tokenValue) {
      this.router.navigate(['landing']);
    }
  }

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
      email: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value,
      ip:''
    };

    this.authenticationService.login(loginObj).subscribe((resp) => {
      if (resp.isSuccess) {
        this.loginResponse = resp.data;
          //in case of OTP disbaled
          this.isLoginSuccessful = resp.isSuccess;
          this.authenticationService.JwtToken = resp.data.token;
          this.authenticationService.refreshToken = resp.data.refreshToken;
          this.authenticationService.setMenuItems(resp.data.menuItems);
          this.router.navigate(['dashboard']);          
      } else {
        this.sweetAlertService.showError('Unsuccess',resp.message);

      }
    });
  }
}