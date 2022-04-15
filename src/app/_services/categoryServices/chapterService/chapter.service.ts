import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlHelperService } from 'src/app/_helpers/url-helper.service';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {

  constructor(private http: HttpClient , private _AUTH_URL:UrlHelperService) { }

  getChaptersByBranchCategoryId(id:any)
  {
    return  this.http.get(this._AUTH_URL.API_URL + 'getChaptersByBranchCategoryId/'+id);
  }

}
