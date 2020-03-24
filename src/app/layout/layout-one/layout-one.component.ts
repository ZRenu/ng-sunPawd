import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-layout-one",
  templateUrl: "./layout-one.component.html",
  styleUrls: ["./layout-one.component.less"]
})
export class LayoutOneComponent implements OnInit {
  isCollapsed = false;

  constructor() {}

  ngOnInit() {}
}
