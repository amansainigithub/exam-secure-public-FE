import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ChapterComponent } from '../../categoryPages/chapters/chapter/chapter.component';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent implements OnInit {

  public myAngularxQrCode: any = null;
  constructor( 
    public dialogRef: MatDialogRef<ChapterComponent
    >,private http:HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any,) {

      //GET CURRENT IP ADDRESS
      // this.http.get("https://grabquiz.com/?format=json").subscribe((res:any)=>{
      //   console.log("***********************" + res.ip);
      // });
     this.myAngularxQrCode = "https://quizclear.com"+"/instructions/"+data.qs+"/"+data.chapterId+"";
    //  this.myAngularxQrCode = "http://localhost:61102/instructions/"+data.qs+"/"+data.chapterId+"";
     console.log("QR CODE PRINT ==================================");
     console.log(this.myAngularxQrCode);
     
     }

  ngOnInit(): void {
  }

}
