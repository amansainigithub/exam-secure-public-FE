import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// const AUTH_API = 'http://localhost:5000/api/public/auth/cred/';
// const AUTH_API = 'http://103.93.16.121:33146/demo/api/public/auth/cred/';
const AUTH_API = 'http://grabquiz.tech/api/public/auth/cred/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'publicSignIn', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'publicSignUp', {
      username,
      email,
      password
    }, httpOptions);
  }
}
