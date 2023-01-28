import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})
export class RecapComponent implements OnInit {
   cardNumber: number = 0;
   cardTotal = 4; 

   ngOnInit(): void {
     for (let i = 0; i < this.cardTotal; i++) {
         let x = "#card-" + i;
         $(x).hide();
     }
   }
   names: string[] = ["Deniz","İbrahim","Emine","Derya"];
   
   first(){
      $("#jiraStart").hide(); 

      let x = "#card-" + this.cardNumber;
      $(x).show();
      $(x).addClass("animate__animated animate__fadeInLeft"); 
   }

   changeCardNumber(): void{    

      let x = "#card-" + this.cardNumber;
      $(x).addClass("animate__animated animate__fadeOutRight");
      $(x).hide();
      
      this.cardNumber ++;

      x = "#card-" + this.cardNumber;
      $(x).show();
      $(x).addClass("animate__animated animate__fadeInLeft");

   }

}
