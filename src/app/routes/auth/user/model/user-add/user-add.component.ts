import { Component, OnInit, OnChanges, Input, Output, EventEmitter, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../auth.service';
import { NoticeService } from 'src/app/shared/notices/notice.service';
import { DA_SERVICE_TOKEN, TokenService } from '@delon/auth';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.less']
})
export class UserAddComponent implements OnInit, OnChanges{

  tip = false;
  userForm: FormGroup;
  @Input() userData = null;
  @Input() change:number;
  @Output() sub = new EventEmitter<void>();
  constructor(
    private fb: FormBuilder,
    private notice: NoticeService,
    private auth: AuthService,
    @Inject(DA_SERVICE_TOKEN) private tokenService: TokenService
  ) {
    this.userForm = this.fb.group({
      userName: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.compose([Validators.pattern(/^[1][3,4,5,7,8][0-9]{9}$/)])]],
      loginName: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      memo: ['']
    });
  }
  ngOnInit() {

  }
  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    if (this.userData) {
      this.userForm.reset({
        userName: this.userData.userName,
        phone: this.userData.phone,
        loginName: this.userData.roleName,
        password: '111111',
        memo: this.userData.memo
      });
    } else {
      this.userForm.reset();
    }
  }
  submitForm(e:Event,v:any) {
    if (this.userForm.valid) {
      this.tip = true;
      const url = this.userData ? 'editUser' : 'addUser';
      if (this.userData) {
        v.id = this.userData.id;
        v.password = v.password === '111111' ? '' : v.password;
      }

      this.auth[url](v).subscribe((res) => {
        this.tip = false;
        this.notice.Notification('系统提示',res.message);
        this.sub.emit();
      },err=>{ this.tip = false;});
    }
  }
  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.userForm.reset();
  }

}