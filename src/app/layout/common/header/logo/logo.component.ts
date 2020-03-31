import { Component, OnInit, Inject } from "@angular/core";
import { DA_SERVICE_TOKEN, TokenService } from "@delon/auth";

@Component({
  selector: "app-logo",
  templateUrl: "./logo.component.html",
  styleUrls: ["./logo.component.less"]
})
export class LogoComponent implements OnInit {
  applyName = "";
  constructor(@Inject(DA_SERVICE_TOKEN) private tokenService: TokenService) {}

  ngOnInit() {
    this.applyName = this.tokenService.get().res.applyName;
  }
}
