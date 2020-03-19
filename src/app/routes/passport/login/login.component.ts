import { Component, OnInit, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PassportService } from "../passport.service";
import { NoticeService } from "src/app/shared/notices/notice.service";
import { DA_SERVICE_TOKEN, TokenService } from "@delon/auth";
import { Router } from "@angular/router";
import { AppService } from "src/app/shared/services/app.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.less"]
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  loadingdesc = "登录";

  constructor(
    private fb: FormBuilder,
    private passport: PassportService,
    private notice: NoticeService,
    private router: Router,
    private app: AppService,
    @Inject(DA_SERVICE_TOKEN) private tokenService: TokenService
  ) {
    this.LoginForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  ngOnInit() {}
  submitForm(v: any) {
    if (this.LoginForm.valid) {
      this.app.spinSubject.next();
      this.passport.login(v).subscribe(res => {
        this.tokenService.set({
          token: res.data.token,
          name: res.data.name,
          id: res.data.id
        });
        this.app.spinSubject.next();
        this.router.navigateByUrl("layout-default");
      });
    } else {
      this.notice.Notification("登录提示", "请输入登录信息！");
    }
  }
}
