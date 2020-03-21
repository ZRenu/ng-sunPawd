import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { Table, TBColumn, TBChange } from 'src/app/pawd/table/table.interface';
import { DA_SERVICE_TOKEN, TokenService } from '@delon/auth';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {
  isVisible = false;
  userData = null;
  userId = '';
  nzTitle = '';
  change = 0;
  params = {
    cusId:'',
    userName: '',
    phone: '',
    limit: 10,
    page: 1
  };
  column:TBColumn[] =[
    {
      title: "成员姓名",
      index: "userName",
      nzWidth: "100px"
    },
    {
      title: "手机号",
      index: "phone",
      nzWidth: "100px"
    },
    {
      title: "角色",
      index: "roleName",
      nzWidth: "100px"
    },
    {
      title: "备注",
      index: "memo",
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
          text: "分配角色",
          mark: "B"
        },
        {
          text: "删除",
          type: "danger",
          mark: "C"
        }
      ]
    }
  ];
  tbData:Table = {
    column:this.column
  };
  constructor(
    private auth:AuthService,
    @Inject(DA_SERVICE_TOKEN) private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.page();
  }
  page() {
    this.params.cusId = this.tokenService.get().res.cusId
    this.auth.page(this.params).subscribe(e => {
    this.tbData.nzTotal = e.data.total;
    this.tbData.nzData =  e.data.rows
   });
      
  }
  tbChange(e: TBChange) {
    switch (e.tbBtnMark) {
      case "A":
        this.isVisible = true;
        this.nzTitle = '编辑成员帐号';
        this.userData = e.rowData;
        break;
      case "B":
        this.isVisible = true;
        this.nzTitle = '分配角色';
        this.userId = e.rowData['id'];
        break;
      default:
        break;
    }
  }
  search(){
this.page();
  }
  clean(){
this.params =  {
  cusId:'',
  userName: '',
  phone: '',
  limit: 10,
  page: 1
};
this.page();
  }
  sub(){
    this.okCancel();
    this.page();
  }
  add() {
    this.change = Math.random();
    this.nzTitle = '添加成员帐号';
    this.isVisible = true;
  }
  handleCancel(){
   this.okCancel();
  }
  handleOk(){
    this.okCancel();
  }
  okCancel(){
    this.userData = null;
    this.userId ='';
    this.isVisible = false;
    this.isVisible = false;
  }

}
