import { Injectable, Inject, InjectionToken } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import 'rxjs';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DA_SERVICE_TOKEN, TokenService } from '@delon/auth';
import { NzNotificationService } from 'ng-zorro-antd';

export const API_URL = new InjectionToken<string>('apiUrl');
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    @Inject(API_URL) public urlPrefix,
    private router: Router,
    @Inject(DA_SERVICE_TOKEN) private tokenService: TokenService,
    private notification: NzNotificationService,
  ) { }
  hearders() {
    const hearders = {
      headers: new HttpHeaders({
        'contentType': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': 'http://api.guaqb.cn'
      }),
    };
    return hearders;
  }
  /**
   * 请求验证
   * @param e 服务器返回数据
   */
  callbackCode(e: { resCode: any; resMsg: string; }) {
    switch (e.resCode) {
      case '00000':
        return e;
      case '01' || '02' || '03':
        this.notification.create('warning', '系统提示',
          e.resMsg);
        break;
      case '04':
        this.notification.create('error', '系统提示',
          e.resMsg);
        break;
      case '401401':
        this.tokenService.clear();
        this.router.navigateByUrl('passport/login');

    }
  }
  /** 登录 */
  login(params: { userCode: any; password: any; }): Observable<any> {
    return this.http.post(this.urlPrefix + 'account/login?userCode=' + params.userCode + '&password=' + params.password, null);
    // return this.http.post(this.urlPrefix + 'account/login', params);
  }
  /**登出 */
  logoOut() {
    this.tokenService.clear();
    this.router.navigateByUrl('passport/login');
  }
  /**根据ip获取天气 */
  weather(ip: any): Observable<any> {
    return this.http.jsonp('https://www.tianqiapi.com/api/?version=v1&ip=' + ip, 'callback');

  }
}
