import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
export let defaul: string;
@Injectable({
  providedIn: "root"
})
export class AppService {
  /** 请求等待 */
  public spinSubject = new Subject();
  constructor() {}
  spinRef() {
    this.spinSubject.next();
  }
  getDefaultLayout() {
    defaul = "layout-default";
  }
}
