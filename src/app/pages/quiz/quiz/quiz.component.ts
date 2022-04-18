import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionAnswerService } from 'src/app/_services/categoryServices/question-answer-service/question-answer.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(
    private _router:ActivatedRoute,
    private rt:Router,
    private _qas:QuestionAnswerService) {
     //SCROLL TO (0,0) AXIS POINT
     this.rt.events.subscribe((event) => {
      window.scrollTo(0, 0)
  });
   }

   id:any;
   questionSetName:any;
  ngOnInit(): void {
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
}
