import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlHelperService } from 'src/app/_helpers/url-helper.service';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient , private _AUTH_URL:UrlHelperService) { }

  submitQuiz(quizList:any)
  {
    return  this.http.post(this._AUTH_URL.API_URL + 'submitQuiz',quizList);
  }
}
