import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './login/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL: string = environment.apiURLBase + "/user";

  constructor(private http: HttpClient) { }

  insertUser(user: User) : Observable<any> {
    return this.http.post<any>(this.apiURL, user);
  }
}
