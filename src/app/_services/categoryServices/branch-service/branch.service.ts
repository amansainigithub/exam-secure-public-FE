import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlHelperService } from 'src/app/_helpers/url-helper.service';
import { AuthService } from '../../auth.service';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor(private http: HttpClient , private _AUTH_URL:UrlHelperService) { }


  getBranchList()
  {
    return  this.http.get(this._AUTH_URL.API_URL + 'getBranchCategoryPublic');
  }

  getBranchListByBottomCategoryIdPublic(bottomCategoryId:any)
  {
    return  this.http.get(this._AUTH_URL.API_URL + 'getBranchListByBottomCategoryIdPublic/'+bottomCategoryId);
  }
}
