import { Component, OnInit, Output, EventEmitter, Inject } from "@angular/core";
import { DA_SERVICE_TOKEN, ITokenService, TokenService } from "@delon/auth";
import { Router } from "@angular/router";
import { fromEvent } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { AppService } from "src/app/shared/services/app.service";

@Component({
  selector: "app-layout-default",
  templateUrl: "./layout-default.component.html",
  styleUrls: ["./layout-default.component.less"]
})
export class LayoutDefaultComponent implements OnInit {
  applyName = "";
  isCollapsed = false;
  constructor(
    private http: HttpClient,
    private app: AppService,
    @Inject(DA_SERVICE_TOKEN) private tokenService: TokenService
  ) {}
  ngOnInit() {
    this.applyName = this.tokenService.get().res.applyName;
  }
}
