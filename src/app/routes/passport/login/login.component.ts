import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.less"]
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  loadingdesc = "登录";

  constructor(private fb: FormBuilder) {
    this.LoginForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  ngOnInit() {}
  submitForm(v: any) {
    console.log("v", v);
  }
}
