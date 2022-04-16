import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlHelperService } from 'src/app/_helpers/url-helper.service';

@Injectable({
  providedIn: 'root'
})
export class BottomService {

  constructor(private http: HttpClient , private _AUTH_URL:UrlHelperService) { }


  getBottomCategoriesBySubCategoryId_RC(subCategoryId:any)
  {
    return  this.http.get(this._AUTH_URL.API_URL + 'getBottomCategoriesBySubCategoryIdRc/'+subCategoryId);
  }
}
