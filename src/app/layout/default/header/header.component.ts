import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs';
import { ApiService } from 'src/app/core/api/api.service';

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
  constructor(
    private api: ApiService
  ) {
  }

  ngOnInit() {
    /**监听浏览器的变化 */
    fromEvent(window, 'resize')
      .subscribe((e) => {
        this.resize = e.currentTarget['innerWidth'];
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
