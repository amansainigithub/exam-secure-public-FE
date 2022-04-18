import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionAnswerService } from 'src/app/_services/categoryServices/question-answer-service/question-answer.service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  constructor(
    private _router:ActivatedRoute,
    private _qas:QuestionAnswerService,
    private rt:Router) 
    {
      //SCROLL TO (0,0) AXIS POINT
      this.rt.events.subscribe((event) => {
        window.scrollTo(0, 0) });
   }

  id:any;
  questionSetName:any;
  ngOnInit(): void {
    this.questionSetName =  this._router.snapshot.params.questionSetName;
    this.id =  this._router.snapshot.params.id;
    this.getQuestionAnswerListByQuestionSetIdPublic_RC();
  }

  getQuestionAnswerListByQuestionSetIdPublic_RC()
  {
    this._qas.getQuestionAnswerListByQuestionSetIdPublic_RC(this.id).subscribe(data=>{
      console.log(data);
    },error=>{
      console.log(error);
    })
  }

}
