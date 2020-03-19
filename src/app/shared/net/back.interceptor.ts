import { Injectable, Injector } from "@angular/core";
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse,
  HttpResponseBase,
  HttpErrorResponse
} from "@angular/common/http";
import { mergeMap, catchError } from "rxjs/operators";
import { Observable } from "rxjs/internal/Observable";
import { DA_SERVICE_TOKEN, ITokenService } from "@delon/auth";
import { throwError, of } from "rxjs";
import { NoticeService } from '../notices/notice.service';
const CODEMESSAGE = {
  200: "服务器成功返回请求的数据。",
  201: "新建或修改数据成功。",
  202: "一个请求已经进入后台排队（异步任务）。",
  204: "删除数据成功。",
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
  401: "用户没有权限（令牌、用户名、密码错误）。",
  403: "用户得到授权，但是访问是被禁止的。",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  406: "请求的格式不可得。",
  410: "请求的资源被永久删除，且不会再得到的。",
  422: "当创建一个对象时，发生一个验证错误。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。"
};
@Injectable()
export class BackInterceptor implements HttpInterceptor {
  constructor(private injector: Injector, private notice: NoticeService) {}
  private handleData(ev: HttpResponseBase): Observable<any> {
    // 业务处理： 服务端返回200，但是有可能是业务上出错
    switch (ev.status) {
      case 200:
        if (ev instanceof HttpResponse) {
          const body: any = ev.body;
          switch (body.status) {
            case 10101:
              this.notice.Notification("登录提示", body.message);
          }
        }
        break;
      case 401:
        // this.notification.error(`未登录或登录已过期，请重新登录。`, ``);
        // // 清空 token 信息
        // (this.injector.get(DA_SERVICE_TOKEN) as ITokenService).clear();
        // this.goTo("/passport/login");
        break;
      case 403:
      case 404:
      case 500:
        // this.goTo(`/exception/${ev.status}`);
        break;
      default:
        if (ev instanceof HttpErrorResponse) {
          console.warn(
            "未可知错误，大部分是由于后端不支持CORS或无效配置引起",
            ev
          );
        }
        break;
    }
    if (ev instanceof HttpErrorResponse) {
      return throwError(ev);
    } else {
      return of(ev);
    }
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      mergeMap((event: any) => {
        // 允许统一对请求错误处理
        if (event instanceof HttpResponseBase) {
          return this.handleData(event);
        }
        // 若一切都正常，则后续操作
        return of(event);
      }),
      catchError((err: HttpErrorResponse) => this.handleData(err))
    );
  }
}
