import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChapterService } from 'src/app/_services/categoryServices/chapterService/chapter.service';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {

  panelOpenState:any = false;

  constructor(
    private _activateRouter:ActivatedRoute,
    private _chapter:ChapterService,
    private router:Router) { }

  branchName:any;
  branchId:any;
  ngOnInit(): void {

    //SCROLL TO (0,0) AXIS POINT
    this.router.events.subscribe((event) => {
      window.scrollTo(0, 0)
  });

    this.branchName=this._activateRouter.snapshot.params.branchName;
    this.branchId=this._activateRouter.snapshot.params.branchId;
    this.getChapterList();
  }

  chapterListByStatus:any;
  getChapterList()
  {
    this._chapter.getChaptersByBranchCategoryId(this.branchId).subscribe(data=>{
      this.chapterListByStatus = data;
      console.log(data);
      
    },error=>{
      console.log(error);
      
    })
  }


}
