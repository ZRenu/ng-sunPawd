import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnChanges
} from "@angular/core";

@Component({
  selector: "app-tabset",
  templateUrl: "./tabset.component.html",
  styleUrls: ["./tabset.component.less"]
})
export class TabsetComponent implements OnInit, OnChanges {
  index = 0;
  @Input() num: number;
  @Input() tabs = [];
  @Input() width = "";
  @Output() closeTab = new EventEmitter<any>();
  constructor() {}
  ngOnChanges(): void {
    if (this.tabs.length) {
      this.index = this.tabs.length - 1;
    } else {
      this.index = 0;
    }
  }

  ngOnInit() {}
  close(tab: any, i: number): void {
    this.closeTab.emit({ tab, i });
  }
  SelectChange(e: any) {
    this.index = e[0];
  }
}
