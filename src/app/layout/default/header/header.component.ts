import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs';
import { ApiService } from 'src/app/core/api/api.service';
declare var returnCitySN: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  /**屏幕尺寸 */
  resize = document.body.clientWidth;
  isCollapsed = false;
  @Output() nzCollapsed = new EventEmitter<void>();
  weathers = null;
  constructor(
    private api: ApiService
  ) {
  }

  ngOnInit() {
    this.weather();
    /**监听浏览器的变化 */
    fromEvent(window, 'resize')
      .subscribe((e) => {
        this.resize = e.currentTarget['innerWidth'];
      });
  }
  /**天气 */
  weather() {
    // console.log(returnCitySN["cip"] + ',' + returnCitySN["cname"]);
    this.api.weather(returnCitySN['cip']).subscribe(e => {
      this.weathers = e;
      console.log(e);
    });
  }
  changeIcon() {
    this.isCollapsed = !this.isCollapsed;
    this.nzCollapsed.emit();
  }
  logout() {
    this.api.logoOut();
  }
}
