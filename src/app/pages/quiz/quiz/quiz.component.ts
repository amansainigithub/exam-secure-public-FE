import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionAnswerService } from 'src/app/_services/categoryServices/question-answer-service/question-answer.service';
import { QuizService } from 'src/app/_services/categoryServices/quiz-service/quiz.service';

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
    private _qas:QuestionAnswerService) {
      //START TIMER
    this.startTimer();
   }

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
      console.log("**********************");
      console.log(data);
      this.quiz = data;
    },error=>{
      console.log(error);
    })
  }

  disabledBackButton()
  {
    history.pushState(null, document.title, location.href);
    window.addEventListener('popstate', function (event)
    {
      history.pushState(null, document.title, location.href);
    });
  }

  //SUBMIT QUIZ
  result:any={};
  submitQuiz()
  {
    //GET TIMES (with:ration)
    console.log(this.display);
    
    //console.log("SUBMIT QUIZ....");
    this.quizService.submitQuiz(this.quiz).subscribe((data:any)=>{
      this.result = data
      console.log(data);
    },(error)=>{
      console.log(error);
    })
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
