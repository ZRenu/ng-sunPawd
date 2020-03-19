import { Injectable, Inject } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { DA_SERVICE_TOKEN, TokenService } from "@delon/auth";

@Injectable({
  providedIn: "root"
})
export class LoginGuardService implements CanActivate {
  constructor(
    @Inject(DA_SERVICE_TOKEN) private tokenService: TokenService,
    private router: Router
  ) {}
  // 路由守卫
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.checkLogin();
  }

  checkLogin(): boolean {
    // 判断本地有没有token
    const token = this.tokenService.get().token;

    // 如果token有值，表示登录成功，继续跳转，否则跳转到首页
    if (token) {
      return true;
    }

    this.router.navigate(["/passport"]);
    return false;
  }
}
