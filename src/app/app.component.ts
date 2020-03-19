import { Component, OnInit } from "@angular/core";
import { AppService } from "./shared/services/app.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent implements OnInit {
  isSpinning = false;
  constructor(private app: AppService) {}
  ngOnInit() {
    this.app.spinSubject.subscribe(() => {
      this.isSpin();
    });
  }
  isSpin() {
    this.isSpinning = !this.isSpinning;
  }
}
