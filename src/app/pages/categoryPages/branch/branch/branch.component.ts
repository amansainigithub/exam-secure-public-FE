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

    bottomCategoryName:any;
    bottomCategoryId:any;
  ngOnInit(): void {

       //SCROLL TO (0,0) AXIS POINT
       window.scroll({ 
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
  });

    this.bottomCategoryName=this._activateRouter.snapshot.params.bottomCategoryName;
    this.bottomCategoryId=this._activateRouter.snapshot.params.bottomCategoryId;
    console.log(this.bottomCategoryId);
    console.log(this.bottomCategoryName);
    
    //calling
    this.getBranchListByBottomCategoryIdPublic();
  }

  branchList:any;
  getBranchListByBottomCategoryIdPublic()
  {
    this._branch.getBranchListByBottomCategoryIdPublic(this.bottomCategoryId).subscribe(data=>{
      this.branchList = data;
      console.log(data);
      
    },error=>{
      console.log(error);
      
    })
  }

}
