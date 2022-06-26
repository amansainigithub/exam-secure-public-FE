import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// const AUTH_API = 'http://localhost:5000/api/public/auth/cred/';
const AUTH_API = 'http://206.189.96.51:5000/api/public/auth/cred/';
// const AUTH_API = 'http://examsecure-env.eba-3xmk9bvg.us-east-1.elasticbeanstalk.com/api/public/auth/cred/';


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
