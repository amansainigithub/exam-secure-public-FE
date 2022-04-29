import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionAnswerService } from 'src/app/_services/categoryServices/question-answer-service/question-answer.service';
import { QuizService } from 'src/app/_services/categoryServices/quiz-service/quiz.service';
import { ReportToEmailComponent } from '../report-to-email/report-to-email.component';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(
    private _router:ActivatedRoute,
    private rt:Router,
    private quizService:QuizService,
    private _qas:QuestionAnswerService,
    public dialog: MatDialog) {
      //START TIMER
    this.startTimer();
   }

   isSubmit:any=false;

   panelOpenState = false;

   id:any;
   questionSetName:any;
  ngOnInit(): void {

    //DISABLED BACK BUTTON
      this.disabledBackButton();

    this.questionSetName =  this._router.snapshot.params.questionSetName;
    this.id =  this._router.snapshot.params.id;
    this.getQuestionAnswerListByQuestionSetIdPublic_RC();

  }

  quiz:any;
  getQuestionAnswerListByQuestionSetIdPublic_RC()
  {
    this._qas.getQuestionAnswerListByQuestionSetIdPublic_RC(this.id).subscribe(data=>{
       console.log(data);
      this.quiz = data;
    },error=>{
      console.log(error);
    })
  }

   //DISABLED BACK BUTTON
  disabledBackButton()
  {
    history.pushState(null, document.title, location.href);
    window.addEventListener('popstate', function (event)
    {
      history.pushState(null, document.title, location.href);
    });
  }

  openDialog() {
    this.dialog.open(ReportToEmailComponent, {
      data: {
        height: '400px',
        width: '600px',
        quiz : this.quiz,
        timeDuration : this.time,
      },
    });
  }



  //SUBMIT QUIZ
  result:any={};
  submitQuiz()
  {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
});

    this.isSubmit = true;
    this.quizService.submitQuiz(this.quiz,this.display).subscribe((data:any)=>{
      this.result = data
      //console.log(data);
    },(error)=>{
      console.log(error);
    })
  }

  
  //DOWNLOAD QUIZ REPORT TO PDF
  downloadQuizReportToPDF()
  {
    this.downF();
    return;
    console.log(this.quiz);
    
    this.isSubmit = true;
    this.quizService.generateQuizResultPdf(this.quiz,this.display).subscribe((data: any)=>{
      console.log(data);
    },(error)=>{
      console.log(error);
    })
  }

  
downF()
{
  this.quizService.generateQuizResultPdf(this.quiz,this.display)
  .subscribe(data => this.downloadFile(data)),
  // error => console.log('Error downloading the file.'),
  () => console.info('OK');
}

downloadFile(data: any) {
  const blob = new Blob([data], { type: 'application/pdf' });

  //DOWNLOAD CODE
  var a = document.createElement("a");
          a.href = URL.createObjectURL(blob);
          a.download = "fileName";
          // start download
          a.click();

    // OPEN PDF TO NEW TAB
  // const url= window.URL.createObjectURL(blob);
  // window.open(url);
}





  //**************TIMER WORKING ****************************

  // timeLeft: number = 0;
  // interval:any;
  // startTimer() {
  //     this.interval = setInterval(() => {
  //       if(this.timeLeft >= 0) {
  //         this.timeLeft++;
  //       } else {
  //         this.timeLeft = 60;
  //       }
  //     },1000)
  //   }

  //   pauseTimer() {
  //     clearInterval(this.interval);
  //   }

  time: number = 0;
  display:any ;
  interval:any;

 startTimer() {
    console.log("=====>");
    this.interval = setInterval(() => {
      if (this.time === 0) {
        this.time++;
      } else {
        this.time++;
      }
      this.display=this.transform( this.time)
    }, 1000);
  }
  transform(value: number): string {
       const minutes: number = Math.floor(value / 60);
       return minutes + ':' + (value - minutes * 60);
  }
  pauseTimer() {
    clearInterval(this.interval);
  }




  
}
