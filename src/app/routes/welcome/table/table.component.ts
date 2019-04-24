import { Component, OnInit } from '@angular/core';
import { TableService } from '../service/table.service';
import { ApiService } from 'src/app/core/api/api.service';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {

  constructor(
    private tableService: TableService,
    private api: ApiService,
  ) { }

  ngOnInit() {

  }
  list() {
    this.tableService.cardInfoList({
      imei: '',
      current: ''
    })
      .subscribe(res => {
        const callbackCode = this.api.callbackCode(res);
        if (callbackCode) {
          console.log('callbackCode', callbackCode);
        }
      });
  }

}
