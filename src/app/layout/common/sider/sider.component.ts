import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-sider",
  templateUrl: "./sider.component.html",
  styleUrls: ["./sider.component.less"]
})
export class SiderComponent implements OnInit {
  @Input() isCollapsed: boolean;
  @Output() activeLink = new EventEmitter<any>();
  @Input() nzTheme: string;
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
  change(m: any) {
    this.activeLink.emit(m);
  }
}
