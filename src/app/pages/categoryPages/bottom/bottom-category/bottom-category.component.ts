import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BottomService } from 'src/app/_services/categoryServices/bottom-service/bottom.service';

@Component({
  selector: 'app-bottom-category',
  templateUrl: './bottom-category.component.html',
  styleUrls: ['./bottom-category.component.css']
})
export class BottomCategoryComponent implements OnInit {

  constructor(
    private _bs:BottomService,
    private _activateRouter:ActivatedRoute,
    private router:Router) { }

  subCategoryName:any;
  subCategoryId:any;
  ngOnInit(): void {
    
     //SCROLL TO (0,0) AXIS POINT
     window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
});

    this.subCategoryName=this._activateRouter.snapshot.params.subCategoryName;
    this.subCategoryId=this._activateRouter.snapshot.params.subCategoryId;
    this.getBottomCategoriesBySubIdRW();
  }

  bottomCategoryList:any;
  getBottomCategoriesBySubIdRW()
  {
    this._bs.getBottomCategoriesBySubIdRW(this.subCategoryId).subscribe(data=>{
      console.log(data);
      this.bottomCategoryList = data;
    },error=>{
      console.log(error);
      
    })
  }

}
