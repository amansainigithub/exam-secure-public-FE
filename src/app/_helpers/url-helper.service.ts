import { Injectable } from '@angular/core';


 


@Injectable({
  providedIn: 'root'
})
export class UrlHelperService {

  API_URL:any = 'http://localhost:5599/api/public/auth/cred/';

  constructor() { }
}
