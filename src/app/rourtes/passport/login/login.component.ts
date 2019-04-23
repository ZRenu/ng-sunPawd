import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

}
