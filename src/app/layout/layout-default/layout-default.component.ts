import { Component, OnInit, Output, EventEmitter, Inject } from "@angular/core";
import { DA_SERVICE_TOKEN, ITokenService, TokenService } from "@delon/auth";
import { HttpClient } from "@angular/common/http";
import { AppService } from "src/app/shared/services/app.service";
import { Router } from "@angular/router";
import { unique } from "src/app/shared/untils/pawd";
import { fromEvent } from "rxjs";
import { Logout } from "../common/header/logout/logout.component";

@Component({
  selector: "app-layout-default",
  templateUrl: "./layout-default.component.html",
  styleUrls: ["./layout-default.component.less"]
})
export class LayoutDefaultComponent implements OnInit {
  isCollapsed = false;
  num = "";
  win = "";
  applyName = "";
  tabs = [];
  out: Logout = {
    them: "dark"
  };
  constructor(
    private http: HttpClient,
    private app: AppService,
    private router: Router,
    @Inject(DA_SERVICE_TOKEN) private tokenService: TokenService
  ) {}
  ngOnInit() {
    fromEvent(window, "resize").subscribe(e => {
      this.viewSize();
    });
    this.applyName = this.tokenService.get().res.applyName;
    this.viewSize();
  }
  viewSize() {
    if (!this.isCollapsed) {
      this.win = window.innerWidth - 248 + "px";
    } else {
      this.win = window.innerWidth - 128 + "px";
    }
    console.log("win", this.win);
  }
  change() {
    this.viewSize();
  }
  active(e: any) {
    const arr = this.tabs;
    arr.push(e);
    this.num = e.id;
    this.tabs = unique(arr);
  }
  closeTab(e: { e: Event; i: number }) {
    this.tabs.splice(e.i, 1);
    if (this.tabs.length) {
      const t = this.tabs[this.tabs.length - 1];
      const path = "/layout-one/" + t.path;
      this.router.navigateByUrl(path);
    }
  }
}
