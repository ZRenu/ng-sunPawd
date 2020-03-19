import { Component, OnInit, Inject } from "@angular/core";
import { DA_SERVICE_TOKEN, TokenService } from "@delon/auth";

@Component({
  selector: "app-header-operate",
  templateUrl: "./header-operate.component.html",
  styleUrls: ["./header-operate.component.less"]
})
export class HeaderOperateComponent implements OnInit {
  user = "";
  constructor(@Inject(DA_SERVICE_TOKEN) private tokenService: TokenService) {}

  ngOnInit() {
    this.user = this.tokenService.get().name;
  }
}
