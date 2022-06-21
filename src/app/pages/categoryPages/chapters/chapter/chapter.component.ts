import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { QrcodeComponent } from 'src/app/pages/QRCODE/qrcode/qrcode.component';
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
    private router:Router,
    public dialog: MatDialog) {

      //SCROLL TO (0,0) AXIS POINT
      window.scroll({ 
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
       });
   }

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

 
  showQrCode(questionSetName:any,id:any){
    const dialogRef = this.dialog.open(QrcodeComponent, {
      width: '310px',
      data: {chapterId:id,qs:questionSetName},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog was successfully closed...');
    });
  }


}
