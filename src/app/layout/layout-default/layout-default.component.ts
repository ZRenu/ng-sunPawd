import { Component, OnInit, Output, EventEmitter, Inject } from "@angular/core";
import { DA_SERVICE_TOKEN, ITokenService } from "@delon/auth";
import { Router } from "@angular/router";
import { fromEvent } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-layout-default",
  templateUrl: "./layout-default.component.html",
  styleUrls: ["./layout-default.component.less"]
})
export class LayoutDefaultComponent implements OnInit {
  isCollapsed = false;
  menus = [];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.menu();
  }
  menu() {
    this.http.get("/menus").subscribe((m: []) => {
      console.log(m);
      this.menus = m;
    });
  }
}
