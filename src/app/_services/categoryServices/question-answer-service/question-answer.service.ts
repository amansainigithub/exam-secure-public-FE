import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlHelperService } from 'src/app/_helpers/url-helper.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionAnswerService {

  constructor(private http: HttpClient , private _AUTH_URL:UrlHelperService) { }

  getQuestionAnswerListByQuestionSetIdPublic_RC(id:any)
  {
    return  this.http.get(this._AUTH_URL.API_URL + 'getQuestionAnswerListByQuestionSetIdPublic_RC/'+id);
  }
}
