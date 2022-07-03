import { Injectable } from '@angular/core';


 


@Injectable({
  providedIn: 'root'
})
export class UrlHelperService {

  // API_URL:any = 'http://localhost:5000/api/public/auth/cred/';

  //  API_URL:any = 'http://103.93.16.121:33146/demo/api/public/auth/cred/';
   API_URL:any = 'http://grabquiz.tech/api/public/auth/cred/';


  constructor() { }
}
