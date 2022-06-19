import { Injectable } from '@angular/core';


 


@Injectable({
  providedIn: 'root'
})
export class UrlHelperService {

//   API_URL:any = 'http://localhost:5000/api/public/auth/cred/';

  API_URL:any = 'http://examsecure-env.eba-3xmk9bvg.us-east-1.elasticbeanstalk.com/api/public/auth/cred/';


  constructor() { }
}
