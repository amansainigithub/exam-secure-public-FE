import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { time } from 'console';
import { UrlHelperService } from 'src/app/_helpers/url-helper.service';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient , private _AUTH_URL:UrlHelperService) { }

  submitQuiz(quizList:any,timeDuration:any)
  {
    return  this.http.post(this._AUTH_URL.API_URL + 'submitQuiz/'+timeDuration,quizList);
  }

  sendReportToEmail(quizList:any,timeDuration:any,email:any)
  {
    console.log("SERV");
      console.log(timeDuration);
      
    return  this.http.post(this._AUTH_URL.API_URL + 'sendReportToEmail/'+timeDuration+"/"+email,quizList);
  }
}
