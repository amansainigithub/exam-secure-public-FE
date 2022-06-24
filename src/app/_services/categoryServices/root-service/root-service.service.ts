import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlHelperService } from 'src/app/_helpers/url-helper.service';

@Injectable({
  providedIn: 'root'
})
export class RootServiceService {

  constructor(private _AUTH_URL:UrlHelperService,private _http:HttpClient) { }


  
  getRootCategoryService()
  {
    return this._http.get(this._AUTH_URL.API_URL+"getRootCategoryListPublic");
  }
}
