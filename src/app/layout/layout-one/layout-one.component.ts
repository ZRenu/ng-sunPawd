import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { fromEvent } from "rxjs";
import { unique } from "src/app/shared/untils/pawd";
import { Logout } from "../common/header/logout/logout.component";

@Component({
  selector: "app-layout-one",
  templateUrl: "./layout-one.component.html",
  styleUrls: ["./layout-one.component.less"]
})
export class LayoutOneComponent implements OnInit {
  isCollapsed = false;
  nzTheme = "dark";
  tabs = [];
  num = "";
  win = "";
  wh = "";
  out: Logout = {
    them: "light"
  };
  constructor(private router: Router) {}

  ngOnInit() {
    fromEvent(window, "resize").subscribe(e => {
      this.viewSize();
    });
    this.viewSize();
  }
  viewSize() {
    if (!this.isCollapsed) {
      this.win = window.innerWidth - 304 + "px";
      this.wh = window.innerWidth - 256 + "px";
    } else {
      this.win = window.innerWidth - 128 + "px";
      this.wh = window.innerWidth - 80 + "px";
    }
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
