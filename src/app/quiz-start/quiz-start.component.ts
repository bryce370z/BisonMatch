import { Component, OnInit } from '@angular/core';
import { quizQuestion } from '../shared/quizQuestion.model';

@Component({
  selector: 'app-quiz-start',
  templateUrl: './quiz-start.component.html',
  styleUrls: ['./quiz-start.component.css']
})
export class QuizStartComponent implements OnInit {

  public  i = 0;
  quizQuestions: quizQuestion [] = [
    new quizQuestion(1,"Your friend is throwing a party at his house. You arrive:","../../assets/images/cuteappa.png","A full hour early. I'm helping him set up.", "15 minutes early. I'm punctual.", "15 minutes late. Who gets to a party on time anyways?","An hour late. I like making an entrance."),
    new quizQuestion(2,"Question 2 ? ","../../assets/images/cuteappa.png","option1", "option2", "option3","option4"),
    new quizQuestion(3,"Question 3 ?","../../assets/images/cuteappa.png","option1", "option2", "option3","option4"),
    new quizQuestion(4,"Question 4 ?","../../assets/images/cuteappa.png","option1", "option2", "option3","option4"),
    new quizQuestion(5,"Question 5 ?","../../assets/images/cuteappa.png","option1", "option2", "option3","option4"),
    new quizQuestion(6,"Question 6 ?","../../assets/images/cuteappa.png","option1", "option2", "option3","option4"),
    new quizQuestion(7,"Question 7 ?","../../assets/images/cuteappa.png","option1", "option2", "option3","option4"),
    new quizQuestion(8,"Question 8 ?","../../assets/images/cuteappa.png","option1", "option2", "option3","option4"),
    new quizQuestion(8,"Question 9 ?","../../assets/images/cuteappa.png","option1", "option2", "option3","option4"),
    new quizQuestion(10,"Question 10 ?","../../assets/images/cuteappa.png","option1", "option2", "option3","option4"),
  ];

  constructor() { }

  ngOnInit() {
  }

  nextQuestion(){
    if(this.i < 9){
        this.i++;
    }
     console.log("Here is our counter " + this.i);
  }

  previousQuestion(){
    if(this.i > 0){
      this.i--;
    }
    console.log("Here is our counter " + this.i);
  }

}
