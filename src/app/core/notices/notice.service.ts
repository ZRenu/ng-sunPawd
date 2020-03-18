import { Injectable } from "@angular/core";
import { NzNotificationService } from "ng-zorro-antd";

@Injectable({
  providedIn: "root"
})
export class NoticeService {
  constructor(private notification: NzNotificationService) {}
  Notification(title: string, msg: string): void {
    this.notification.blank(title, msg, {
      nzStyle: {
        width: "300px"
      },
      nzClass: "test-class"
    });
  }
}
