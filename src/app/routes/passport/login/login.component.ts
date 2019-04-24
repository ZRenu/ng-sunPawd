import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/api/api.service';
import { DA_SERVICE_TOKEN, TokenService } from '@delon/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  error = '';
  loading = false;
  loadingdesc = '登录';
  submitTime = new Date();
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router,
    @Inject(DA_SERVICE_TOKEN) private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }
  submitForm() {
    // const loginParams = {
    //   userCode: this.userName.value,
    //   password: this.password.value,
    // };
    if (this.form.valid) {
      // author
      if (this.userName.value === 'admin' && this.password.value === '12345678') {
        this.tokenService.set({
          token: 'admin',
          loginIP: '192.168.1.68',
          userId: '12',
          loginCode: 'admin',
          type: 'login',
          time: +new Date(),
          author: 'admin'
        });
        this.router.navigateByUrl('default');
      }

      // this.api.login(loginParams)
      //   .subscribe(res => {
      //     const data = res.data;
      //       // 设置Token信息
      //       this.tokenService.set({
      //         token: data.token,
      //         loginIP: data.loginIP,
      //         userId: data.userId,
      //         loginCode: data.loginCode,
      //         type: 'login',
      //         time: +new Date(),
      //       }
      //       );
      //       this.router.navigateByUrl('default');
      //   });
    }
  }
  get userName() { return this.form.controls.userName; }
  get password() { return this.form.controls.password; }
}
