import { Component, OnInit, Inject, Input } from "@angular/core";
import { DA_SERVICE_TOKEN, TokenService } from "@delon/auth";
import { Router } from "@angular/router";

@Component({
  selector: "app-logout",
  templateUrl: "./logout.component.html",
  styleUrls: ["./logout.component.less"]
})
export class LogoutComponent implements OnInit {
  user = "";
  @Input() out: Logout = {};
  constructor(
    @Inject(DA_SERVICE_TOKEN) private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = this.tokenService.get().res.name;
  }
  logout() {
    this.tokenService.clear();
    this.router.navigateByUrl(this.tokenService.login_url);
  }
}
export interface Logout {
  color?: string;
  them?: "light" | "dark";
}
