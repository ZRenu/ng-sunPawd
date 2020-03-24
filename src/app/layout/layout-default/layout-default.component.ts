import { Component, OnInit, Output, EventEmitter, Inject } from "@angular/core";
import { DA_SERVICE_TOKEN, ITokenService, TokenService } from "@delon/auth";
import { HttpClient } from "@angular/common/http";
import { AppService } from "src/app/shared/services/app.service";

@Component({
  selector: "app-layout-default",
  templateUrl: "./layout-default.component.html",
  styleUrls: ["./layout-default.component.less"]
})
export class LayoutDefaultComponent implements OnInit {
  num = 0;
  applyName = "";
  isCollapsed = false;
  tabs = [];
  constructor(
    private http: HttpClient,
    private app: AppService,
    @Inject(DA_SERVICE_TOKEN) private tokenService: TokenService
  ) {}
  ngOnInit() {
    this.applyName = this.tokenService.get().res.applyName;
  }
  active(e: Event) {
    this.num = Math.random();
    this.tabs.push(e);
  }
  closeTab(e: { e: Event; i: number }) {
    this.tabs.splice(e.i, 1);
  }
}
