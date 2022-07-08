import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizService } from 'src/app/_services/categoryServices/quiz-service/quiz.service';

@Component({
  selector: 'app-report-to-email',
  templateUrl: './report-to-email.component.html',
  styleUrls: ['./report-to-email.component.css']
})
export class ReportToEmailComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {quiz:any,timeDuration:any},
    private quizService:QuizService,
    private _snackBar: MatSnackBar) {
    // console.log(data.quiz);
    // console.log(data.timeDuration);
    // console.log(data.email);
    
  }

  reportForm = {
    email:""
  }

  ngOnInit(): void {
  }

  objNew :any;
  quizList:any;
  timeDuration:any;
  email:any;
  sendEmail()
  {
    console.log(this.data.quiz);
    console.log("*****************************");
    console.log("emai Sender Working....");
    let timeDuration =  JSON.stringify(this.data.timeDuration);

    this.quizService.sendReportToEmail(this.data.quiz,timeDuration,this.reportForm.email).subscribe(data=>{
      console.log("SEND EMAIL SUCCESS");
      this._snackBar.open("Email send Success...", "cancel");
      console.log(data);
    },error=>{
      console.log(error);
    })
    
  }



}
