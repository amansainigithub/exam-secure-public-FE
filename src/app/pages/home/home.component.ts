import { Component, OnInit } from '@angular/core';
import { BranchService } from 'src/app/_services/categoryServices/branch-service/branch.service';
import { SubCategoryService } from 'src/app/_services/categoryServices/sub-category-service/sub-category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _bs:BranchService,private _scs:SubCategoryService) { }

  ngOnInit(): void {
    //branch-list
    this.getBranchList();

    // subCategoryList
    this.getSubCategoryList();
  }

  branchList:any;
  getBranchList()
  {
    this._bs.getBranchList().subscribe(data=>{
      this.branchList = data;
      console.log(data);
      
    },error=>{
      console.log(error);
      
    })
  }

  subCategoryList:any;
  getSubCategoryList()
  {
    this._scs.getSubCategoryList().subscribe(data=>{
      this.subCategoryList = data;
      console.log(data);
      
    },error=>{
      console.log(error);
      
    })
  }
}

