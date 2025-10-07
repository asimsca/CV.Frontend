import { Component, Input, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { LoginResponse } from 'src/app/models/dto/response/user-management/login-response';
import { LoginRequest } from 'src/app/models/dto/request/user-management/login-request';
import { CommonService } from 'src/app/services/common/common.service';
import { SweetAlertService } from 'src/app/shared/services/sweet-alert.service';
import { RegexPatterns } from 'src/app/validators/regex-patterns';
import { environment } from '../../../../environments/environment';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageEnum } from 'src/app/enums/message.enum';
import { RegisterRequest } from 'src/app/models/dto/request/user-management/register-request';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @Input() data: any;
  loginForm: FormGroup;
  registerForm: FormGroup;
  errorMessage = '';
  isLoginSuccessful = false;
  isOTPEnabled: boolean = false;
  isPasswordHide = true;
  minPasswordLength = 8;
  passwordRegex = '';
  loginResponse!: LoginResponse;
  msg: string = '';
  showLoginSection = true;
  showRegisterSection = false;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private commonService: CommonService,
    private sweetAlertService: SweetAlertService,
    public activeModal: NgbActiveModal
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(RegexPatterns.emailPattern)]],
      password: ['', [Validators.required]],
    });

    this.registerForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(RegexPatterns.emailPattern)]],
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
      email: this.loginForm.controls['email'].value,
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
        this.sweetAlertService.showSuccess("Success", resp.message);
        this.activeModal.close({ message: MessageEnum.loginSuccess });

      } else {
        this.sweetAlertService.showError('Failed', resp.message);
      }
    });
  }

  showRegisterForm() {
    this.showLoginSection = false;
    this.loginForm.reset();
    this.showRegisterSection = true;
  }

  showLoginForm() {
    this.showLoginSection = true;
    this.registerForm.reset();
    this.showRegisterSection = false;
  }


  onRegister() {

    this.errorMessage = '';

    let obj: RegisterRequest = {
      fullName: this.registerForm.controls['fullName'].value,
      email: this.registerForm.controls['email'].value,
      password: this.registerForm.controls['password'].value,
    };

    this.authenticationService.register(obj).subscribe((resp) => {
      if (resp.isSuccess) {
        this.sweetAlertService.showSuccess("Success", resp.message);
        this.showLoginForm();
      } else {
        this.sweetAlertService.showError('Failed', resp.message);
      }
    });
  }

}