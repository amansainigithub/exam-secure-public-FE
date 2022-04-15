import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlHelperService } from 'src/app/_helpers/url-helper.service';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  constructor(private http: HttpClient , private _AUTH_URL:UrlHelperService) { }


  getSubCategoryList()
  {
    return  this.http.get(this._AUTH_URL.API_URL + 'getSubCategoryPublic');
  }
}
