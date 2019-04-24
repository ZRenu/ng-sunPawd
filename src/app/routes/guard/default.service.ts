import { Injectable, Inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ApiService } from 'src/app/core/api/api.service';
import { Observable } from 'rxjs';
import { NzNotificationService } from 'ng-zorro-antd';
import { DA_SERVICE_TOKEN, TokenService } from '@delon/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  token: any;
  constructor(
    private api: ApiService,
    @Inject(DA_SERVICE_TOKEN) private tokenService: TokenService,
    private notification: NzNotificationService,
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean> | Promise<boolean> | boolean {
    this.token = this.tokenService.get().token;
    if (this.token) {
      return true;
    } else {
      this.notification.create('warning', '系统提示', '登录失效，请重新登录！');
      this.api.logoOut();
      return false;
    }

  }
}
