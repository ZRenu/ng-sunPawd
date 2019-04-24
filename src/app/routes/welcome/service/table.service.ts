import { Injectable, Inject } from '@angular/core';
import { API_URL } from 'src/app/core/api/api.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(
    private http: HttpClient,
    @Inject(API_URL) public urlPrefix,
  ) { }
  cardInfoList(params): Observable<any> {
    return this.http.post(this.urlPrefix + 'moduleItem/list', params);
  }

}

