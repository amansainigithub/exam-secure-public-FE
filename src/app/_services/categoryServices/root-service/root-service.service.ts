import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlHelperService } from 'src/app/_helpers/url-helper.service';

@Injectable({
  providedIn: 'root'
})
export class RootServiceService {

  constructor(private _AUTH_URL:UrlHelperService,private _http:HttpClient) { }


  
    programs:string =`class OverloadMain  {  public static void main(int a)  //overloaded main method  {  System.out.println(a);   }  public static void main(String args[])   {      System.out.println("main method incoked");  main(6);  }  `;


   to_compile = {
    "LanguageChoice": "4",
    "Program": this.programs,
    "Input": "",
    "CompilerArgs" : ""
  };
  

  getRootCategoryService()
  {
    this._http.post("https://rextester.com/rundotnet/api",this.to_compile).subscribe(data=>{
      console.log(data);
    },error=>{
        console.log("error");
    })
    
    
    return this._http.get(this._AUTH_URL.API_URL+"getRootCategoryListPublic");
  }
}

