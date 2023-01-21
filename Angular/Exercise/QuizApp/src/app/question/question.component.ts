import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  name: string="";
  questionList: any = [];
  currentQuestion: number = 0;
  points: number = 0;
  counter = 60;
  correctAnswer: number = 0;
  incorrectAnswer: number = 0;
  interval$ : any;
  progress:string = "0";

  constructor(private questionService: QuestionService) {        
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.name = localStorage.getItem("name")!;
    this.getAllQuestions();
    this.startCounter();
  }

  getAllQuestions(){
      this.questionService.getQuestionJson()
      .subscribe(res => {
        this.questionList = res.questions;
      });
  }

  nextQuestion(){
      if(this.currentQuestion < this.questionList.length - 1){
        this.currentQuestion++;
      }
  }

  previousQuestion(){
      if(this.currentQuestion > 0){
        this.currentQuestion--;
      }
  }

  answer(currentQuestionNumber: number, option:any){
      if((currentQuestionNumber < this.questionList.length)){
        this.currentQuestion++;    
        this.resetCounter();   
      }
      else{
        alert("sa");
      }
      if(option.correct){
         this.points+=10;
         this.correctAnswer++;
        }
        else{
          this.points-=10;
          this.incorrectAnswer--;
        }
        this.getProgressPercent();
  }

  startCounter(){
    this.interval$ = interval(1000).subscribe(val => {
        this.counter--;
        if(this.counter === 0){
          this.currentQuestion++;
          this.counter = 60;
          this.points -= 10;
        }
    });
    setTimeout(() => {
       this.interval$.unsubscribe();
    }, 600000);
  }

  stopCounter(){
    this.interval$.unsubscribe();
    this.counter = 0;
  }

  resetCounter(){
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
  }
  resetQuiz(){
    this.resetCounter();
    this.getAllQuestions();
    this.points = 0;
    this.counter = 60;
    this.currentQuestion = 0; 
    this.progress = "0";
  }

  getProgressPercent(){
    if(this.currentQuestion == 0){
      this.progress = ((this.currentQuestion/this.questionList.length) * 100).toString();
    }
    else{
    this.progress = (((this.currentQuestion+1)/this.questionList.length) * 100).toString();
    }
    return this.progress;
  }

}
