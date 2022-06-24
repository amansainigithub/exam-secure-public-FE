import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubCategoryService } from 'src/app/_services/categoryServices/sub-category-service/sub-category.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  constructor(
    private _activateRouter:ActivatedRoute,
    private router:Router,
    private _scs:SubCategoryService) { }

  rootCategoryName:any;
  rootCategoryId:any;
  ngOnInit(): void {
     //SCROLL TO (0,0) AXIS POINT
     window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
});

    this.rootCategoryName = this._activateRouter.snapshot.params.rootCategoryName;
    this.rootCategoryId   = this._activateRouter.snapshot.params.rootCategoryId;
    console.log(this.rootCategoryId +" : "+ this.rootCategoryName);
    
    //sub Category By Root Category Id
    this.getSubCategoryListByRootCategoryId();
  }



  subCategoryList:any;
  getSubCategoryListByRootCategoryId()
  {
    this._scs.getSubCategoryListByRootCategoryId(this.rootCategoryId).subscribe(data=>{
      console.log(data);
      this.subCategoryList = data;
    },error=>{
      console.log(error);
      
    })
  }

}
