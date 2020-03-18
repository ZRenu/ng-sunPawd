import { Injectable, Inject } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";
import { DA_SERVICE_TOKEN, TokenService } from "@delon/auth";

@Injectable({
  providedIn: "root"
})
export class LoginGuardService implements CanActivate {
  constructor(
    @Inject(DA_SERVICE_TOKEN) private tokenService: TokenService,
    private router: Router
  ) {}
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const token = this.tokenService.get().token;
    if (!token) {
      this.router.navigateByUrl("/passport/login");
      return false;
    } else {
      return true;
    }
  }
}
