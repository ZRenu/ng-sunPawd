import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-sider",
  templateUrl: "./sider.component.html",
  styleUrls: ["./sider.component.less"]
})
export class SiderComponent implements OnInit {
  @Input() isCollapsed: boolean;
  menus = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.menu();
  }
  menu() {
    this.http.get("/menus").subscribe((m: any) => {
      this.menus = m;
    });
  }
}
