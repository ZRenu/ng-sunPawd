import { Component, OnInit, OnChanges, Output, EventEmitter, Input, Inject } from '@angular/core';
import { AuthService } from '../../../auth.service';
import { NoticeService } from 'src/app/shared/notices/notice.service';
import { DA_SERVICE_TOKEN, TokenService } from '@delon/auth';

@Component({
  selector: 'app-right-role',
  templateUrl: './right-role.component.html',
  styleUrls: ['./right-role.component.less']
})
export class RightRoleComponent implements OnInit,OnChanges {

  tip = false;
  tree = null;
  auths = [];
  curRoleId:string;
  @Output() authSave = new EventEmitter<void>();
  @Input() roleId = '';
  @Input() roleName = '';
  constructor(
    private auth: AuthService,
    private notice:NoticeService,
    @Inject(DA_SERVICE_TOKEN) private tokenService: TokenService
  ) {
    this.curRoleId = this.tokenService.get().res.roleId
  }

  ngOnInit() {

    this.strat();
  }
  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    this.strat();
  }
  strat() {
    this.auth.rightTree({ roleId: this.roleId,curRoleId:this.curRoleId }).subscribe(e => {
      this.tree = e.data;
    });
  }
  save() {
    if (this.roleName === '') {
      this.notice.Notification('系统提示', '请输入角色名称');
    } else {
      this.tip = true;
      this.tree.forEach(t => {
        if (t.checked) {
          this.auths.push({
            resourceId: t.id,
            resourceType: t.type
          });
          if (t.children.length) {
            t.children.forEach(c => {
              if (c.checked) {
                this.auths.push({
                  resourceId: c.id,
                  resourceType: c.type
                });
                if (c.children.length) {
                  c.children.forEach(b => {
                    if (b.checked) {
                      this.auths.push({
                        resourceId: b.id,
                        resourceType: b.type
                      });
                    }
                  });
                }
              }
            });

          }
        }
      });
      const params = new FormData();
      const url = this.roleId === '' ? 'rightSave' : 'rightEdit';
      params.append('auths', JSON.stringify(this.auths));
      params.append('roleName', this.roleName);
      if (this.roleId !== '') {
        params.append('id', this.roleId);
      }
      this.auth[url](params).subscribe(res => {
        this.tip = false;
        this.authSave.emit();
      }, err => this.tip = false);
    }
  }

}
