import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  page(params: any): Observable<any> {
    return this.http.get('/api/user/page', { params });
  }
  addUser(params: any): Observable<any> {
    return this.http.post('/api/user/add', params);
  }
  editUser(params: any): Observable<any> {
    return this.http.put('/api/user/update/' + params.id, params);
  }
  select(): Observable<any> {
    return this.http.get('/api/role/select');
  }
  auth(params: any): Observable<any> {
    return this.http.post('/api/user/setRole', null, {params} );
  }
  delete(params: any): Observable<any> {
    return this.http.post('/api/user/delete', null, {params}  );
  }
  // 权限管理
  rightPage(params: any): Observable<any> {
    return this.http.get('/api/role/page', { params });
  }
  rightTree(params: any): Observable<any> {
    return this.http.get('/api/menu/tree', { params });
  }
  rightSave(params: any): Observable<any> {
    return this.http.post('/api/role/auth/add', params);
  }
  rightEdit(params: any): Observable<any> {
    return this.http.post('/api/role/auth/update', params);
  }
  rightDelete(params: any): Observable<any> {
    return this.http.delete('/api/role/delete/'+ params.id);
  }
}
