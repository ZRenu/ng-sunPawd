import { Component, OnInit, Output, EventEmitter, Inject } from "@angular/core";
import { DA_SERVICE_TOKEN, ITokenService, TokenService } from "@delon/auth";
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
  user = "";
  constructor(
    private http: HttpClient,
    @Inject(DA_SERVICE_TOKEN) private tokenService: TokenService
  ) {}
  ngOnInit() {
    this.menu();
    this.user = this.tokenService.get().name;
  }
  menu() {
    this.http.get("/menus").subscribe((m: []) => {
      console.log(m);
      this.menus = m;
    });
  }
}
