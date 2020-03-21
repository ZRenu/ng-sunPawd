import { Component, OnInit, Inject } from "@angular/core";
import { DA_SERVICE_TOKEN, TokenService } from "@delon/auth";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-header-operate",
  templateUrl: "./header-operate.component.html",
  styleUrls: ["./header-operate.component.less"]
})
export class HeaderOperateComponent implements OnInit {
  user = "";
  loading = false;
  sourceData = [];
  data = [];
  constructor(
    @Inject(DA_SERVICE_TOKEN) private tokenService: TokenService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = this.tokenService.get().res.userName;
    this.notice();
    this.msg();
  }
  notice() {
    this.http.get("/notice").subscribe((n: []) => {
      this.sourceData = n;
    });
  }
  msg() {
    this.http.get("/msg").subscribe((m: []) => {
      this.data = m;
    });
  }
  logout() {
    this.tokenService.clear();
    this.router.navigateByUrl(this.tokenService.login_url);
  }
}
