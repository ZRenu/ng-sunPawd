import { Component, OnInit, Output, EventEmitter, Input, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../auth.service';
import { DA_SERVICE_TOKEN, TokenService } from '@delon/auth';
import { NoticeService } from 'src/app/shared/notices/notice.service';

@Component({
  selector: 'app-user-dis',
  templateUrl: './user-dis.component.html',
  styleUrls: ['./user-dis.component.less']
})
export class UserDisComponent implements OnInit {

  @Output() userSave = new EventEmitter<void>();
  @Input() userId = '';
  validateForm: FormGroup;
  selectList = [];
  constructor(
    private fb: FormBuilder,
    private auth:AuthService,
    private notice:NoticeService,
    @Inject(DA_SERVICE_TOKEN) private tokenService: TokenService,
  ) {
    this.validateForm = this.fb.group({
      roleId: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.list();
  }
  list() {
    this.auth.select().subscribe((e) => {
      this.selectList = e.data;
    });
  }
  submitForm(e, v) {
    v.userId = this.userId;
    this.auth.auth(v).subscribe(res => {
      this.notice.Notification('系统提示',res.message)
      this.userSave.emit();
    });

  }
  resetForm(e) {
    e.preventDefault();
    this.validateForm.reset();
  }
}
