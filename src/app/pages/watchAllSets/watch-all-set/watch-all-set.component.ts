import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ChapterService } from 'src/app/_services/categoryServices/chapterService/chapter.service';
import { QrcodeComponent } from '../../QRCODE/qrcode/qrcode.component';

@Component({
  selector: 'app-watch-all-set',
  templateUrl: './watch-all-set.component.html',
  styleUrls: ['./watch-all-set.component.css']
})
export class WatchAllSetComponent implements OnInit {

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

   subCaategoryName:any;
   id:any;
  ngOnInit(): void {
   
    this.subCaategoryName=this._activateRouter.snapshot.params.subCategoryName;
    this.id=this._activateRouter.snapshot.params.id;
    this.getAllSetsBySubId();
  }

  setList:any;
  getAllSetsBySubId()
  {
    this._chapter.getAllSetsBySubId(this.id).subscribe(data=>{
      this.setList = data;
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
