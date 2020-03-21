import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Table, TBColumn, TBChange } from "src/app/pawd/table/table.interface";
const listOfData = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park New York No. 1 Lake ParkNew York No. ",
    address1: "New York No. 1 Lake Park New York No. 1 Lake ParkNew York No. ",
    address2: "New York No. 1 Lake Park New York No. 1 Lake ParkNew York No. ",
    address3: "New York No. 1 Lake Park New York No. 1 Lake ParkNew York No. ",
    address4: "New York No. 1 Lake Park New York No. 1 Lake ParkNew York No. ",
    address5: "New York No. 1 Lake Park New York No. 1 Lake ParkNew York No. ",
    address6: "New York No. 1 Lake Park New York No. 1 Lake ParkNew York No. "
  },
  {
    key: "2",
    name: "John",
    age: 33,
    address: "New York No. 1 Lake Park New York No. 1 Lake ParkNew York No. ",
    address1: "New York No. 1 Lake Park New York No. 1 Lake ParkNew York No. ",
    address2: "New York No. 1 Lake Park New York No. 1 Lake ParkNew York No. ",
    address3: "New York No. 1 Lake Park New York No. 1 Lake ParkNew York No. ",
    address4: "New York No. 1 Lake Park New York No. 1 Lake ParkNew York No. ",
    address5: "New York No. 1 Lake Park New York No. 1 Lake ParkNew York No. ",
    address6: "New York No. 1 Lake Park New York No. 1 Lake ParkNew York No. "
  }
];
@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.less"]
})
export class IndexComponent implements OnInit {
  @ViewChild("tb", { static: true }) tb: ElementRef;
  constructor() {}
  column: TBColumn[] = [
    {
      title: "姓名",
      index: "name",
      nzWidth: "100px"
    },
    {
      title: "年龄",
      index: "age",
      nzWidth: "150px"
    },
    {
      title: "地址",
      index: "address",
      nzWidth: "150px"
    },
    {
      title: "地址",
      index: "address1",
      nzWidth: "150px"
    },
    {
      title: "地址",
      index: "address2",
      nzWidth: "150px"
    },
    {
      title: "地址",
      index: "address3",
      nzWidth: "150px"
    },
    {
      title: "地址",
      index: "address4",
      nzWidth: "150px"
    },
    {
      title: "地址",
      index: "address5",
      nzWidth: "150px"
    },
    {
      title: "地址",
      index: "address6",
      nzWidth: "150px"
    },
    {
      title: "操作",
      nzWidth: "150px",
      nzRight: "0px",
      buttons: [
        {
          text: "添加",
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
  tbData: Table = {
    nzData: listOfData,
    nzLoading: true,
    column: this.column,
    nzScroll: { x: "2000px" }
  };
  ngOnInit() {
    this.tbData.nzLoading = false;
  }
  tbChange(e: TBChange) {
    switch (e.tbBtnMark) {
      case "A":
        console.log("A");
        console.log(e.rowData);
        break;
      case "B":
        console.log("B");
        console.log(e.rowData);
        break;
      default:
        break;
    }
  }
}
