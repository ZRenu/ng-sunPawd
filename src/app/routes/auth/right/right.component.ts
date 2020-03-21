import { Component, OnInit, Inject } from '@angular/core';
import { TBColumn, Table, TBChange } from 'src/app/pawd/table/table.interface';
import { AuthService } from '../auth.service';
import { DA_SERVICE_TOKEN, TokenService } from '@delon/auth';
import { NoticeService } from 'src/app/shared/notices/notice.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.less']
})
export class RightComponent implements OnInit {

  params = {
    cusId: '',
    roleName: '',
    limit: 10,
    page: 1
  };
  title = '';
  isVisible = false;
  finshData = null;
  roleName ='';
  roleId = '';
  column:TBColumn[] =[
    {
      title: "角色名",
      index: "roleName",
      nzWidth: "100px"
    },
    {
      title: "权限描述",
      index: "memo",
      nzWidth: "100px"
    },
    {
      title: "创建时间",
      index: "crtTime",
      nzWidth: "100px"
    },
    {
      title: "操作",
      nzWidth: "150px",
      nzRight: "0px",
      buttons: [
        {
          text: "编辑",
          mark: "A"
        },
        {
          text: "删除",
          type: "danger",
          mark: "B"
        }
      ]
    }
  ];
  tbData:Table = {
    column:this.column
  };
  constructor(
    private auth:AuthService,
    private notice:NoticeService,
    @Inject(DA_SERVICE_TOKEN) private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.page();
  }
  page() {
    this.params.cusId = this.tokenService.get().res.cusId
    this.auth.rightPage(this.params).subscribe(e => {
    this.tbData.nzTotal = e.data.total;
    this.tbData.nzData =  e.data.rows
   });
      
  }
  tbChange(e: TBChange) {
    switch (e.tbBtnMark) {
      case "A":
    this.roleId = e.rowData['id'];
    this.roleName = e.rowData['roleName'];
    this.title = '编辑角色';
    this.isVisible = true;
        break;
      case "B":
this.auth.rightDelete({id: e.rowData['id']}).subscribe(e=>{
  this.page();
  this.notice.Notification('系统提示',e.message);
})
        break;
    }
  }
  
  search(){
    this.page();
  }
  clean(){
this.params = {
  cusId: '',
  roleName: '',
  limit: 10,
  page: 1
};
this.page();
  }
add(){
  this.roleId = '';
  this.roleName = '';
  this.title = '添加角色';
  this.isVisible = true;
}
authSave(){
  this.okChange();
  this.page();
}
handleCancel(){
this.okChange();
}
handleOk(){
  this.okChange();
}
okChange(){
  this.isVisible = false;

}

}
