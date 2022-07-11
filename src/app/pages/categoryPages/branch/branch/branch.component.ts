import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchService } from 'src/app/_services/categoryServices/branch-service/branch.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  constructor( private _branch:BranchService,
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
    this.subCategoryId=this._activateRouter.snapshot.params.subId;
    console.log(this.subCategoryId);
    console.log(this.subCategoryName);
    
    //calling
    this.getBranchListBySubId();
  }

  branchList:any;

  getBranchListBySubId()
  {
    this._branch.getBranchListBySubId(this.subCategoryId).subscribe(data=>{
      this.branchList = data;
      console.log("**********");
      console.log(data);
      
    },error=>{
      console.log(error);
      
    })
  }


  // getBranchListByBottomCategoryIdPublic()
  // {
  //   this._branch.getBranchListByBottomCategoryIdPublic(this.subCategoryId).subscribe(data=>{
  //     this.branchList = data;
  //     console.log(data);
      
  //   },error=>{
  //     console.log(error);
      
  //   })
  // }

}
