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
    //console.log("SUBMIT QUIZ....");
    this.quizService.submitQuiz(this.quiz).subscribe((data:any)=>{
      this.result = data
      console.log(data);
    },(error)=>{
      console.log(error);
    })
    
  }





  
}
