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
     this.router.events.subscribe((event) => {
      window.scrollTo(0, 0)
  });

    this.subCategoryName=this._activateRouter.snapshot.params.subCategoryName;
    this.subCategoryId=this._activateRouter.snapshot.params.subCategoryId;
    this.getBottomCategoriesBySubCategoryIdRc();
  }

  bottomCategoryList:any;
  getBottomCategoriesBySubCategoryIdRc()
  {
    this._bs.getBottomCategoriesBySubCategoryId_RC(this.subCategoryId).subscribe(data=>{
      console.log(data);
      this.bottomCategoryList = data;
    },error=>{
      console.log(error);
      
    })
  }

}
