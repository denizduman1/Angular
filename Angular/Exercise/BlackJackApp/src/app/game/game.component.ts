import { Component } from '@angular/core';
import { Card } from '../model/cards';
import { Shuffle } from '../model/shuffle';
import { GameService } from '../services/game-service/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  username: string = localStorage.getItem("username")!;
  shuffle: Shuffle | any;
  card: Card | any = [];
  cardNumber: number = 3;
  src: string = ""; 
  counter: number = 0;
  myCards: Card | any = [];
  kasaCards: Card | any = [];
  myTotalPoints: number = 0;
  kasaTotalPoints: number = 0;
  srcKasa: string = "";
  kagitSakla:boolean =  false;

  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getShuffle();
  }

  getShuffle(){
    this.gameService.getShuffle().subscribe(res => {
        this.shuffle = res;
        this.getCards();
        this.setSrc();
    });
  }

  getCards(){
    this.gameService.getCard(this.shuffle.deck_id).subscribe(res => {
        this.card = res.cards;
        this.kasaCards.push(this.card[0]);
        this.myCards.push(this.card[2]);
    });
  }

  getCard(){
      if (this.counter == 0) {
        this.src = this.card[3].image;
        this.myCards.push(this.card[3]);
        this.counter++;
        
        if(this.myCards.length > 0){
            this.myCards.forEach(item => {
              if(item.value == "QUEEN" || item.value == "KING" || item.value == "JACK" || item.value == "ACE"){
                 this.myTotalPoints += 10;
              }
              else{
                this.myTotalPoints += parseInt(item.value);
              }
            });
        }
        
        if (this.myTotalPoints == 21) {
           alert("Kazandın Black Jack");
        }
      }
  }
  
  setSrc(){
    this.src = "https://bicyclecards.org/wp-content/uploads/2019/11/450.png";
    this.srcKasa = "https://bicyclecards.org/wp-content/uploads/2019/11/450.png";
  }


  kasaAc(){
     if (this.counter == 1) {
      this.srcKasa = this.card[1].image;
      this.kasaCards.push(this.card[1]);
      this.kagitSakla = true;

      if(this.kasaCards.length > 0){
        this.kasaCards.forEach(item => {
          if(item.value == "QUEEN" || item.value == "KING" || item.value == "JACK" || item.value == "ACE"){
            this.kasaTotalPoints += 10;
          }
          else{
            this.kasaTotalPoints += parseInt(item.value);
          }
        });
      }
      if (this.myTotalPoints == 21) {
        setTimeout(() => {
          alert("Kasa Kazandı Black Jack");
        }, 2000);
      }
      if (this.kasaTotalPoints > this.myTotalPoints) {
        setTimeout(() => {
          alert("KASA KAZANDI TOPLAM SKOR KASA = " + this.kasaTotalPoints.toString() + " SEN = " + this.myTotalPoints.toString());
        }, 2000);    
        console.log("ara bilgi = " + this.kasaTotalPoints + " " + this.myTotalPoints);
  
      }
      else{
        console.log("ara bilgi = " + this.kasaTotalPoints + " " + this.myTotalPoints);
        while (this.kasaTotalPoints < 19) {
           this.cardNumber++;
           this.kasaCards.push(this.card[this.cardNumber]);
           this.kasaTotalPoints = 0;
           this.kasaCards.forEach(item => {
            if(item.value == "QUEEN" || item.value == "KING" || item.value == "JACK" || item.value == "ACE"){
              this.kasaTotalPoints += 10;
              console.log("item " + item.value);
              console.log("2- ara bilgi = " + this.kasaTotalPoints + " " + this.myTotalPoints);
            }            
            else{
              console.log("item " + item.value);
              this.kasaTotalPoints += parseInt(item.value);
              console.log("3- ara bilgi = " + this.kasaTotalPoints + " " + this.myTotalPoints);
            }
          });
        }
        if (this.kasaTotalPoints > 21) {
          setTimeout(() => {
            alert("SEN KAZANDIN TOPLAM SKOR KASA = " + this.kasaTotalPoints.toString() + " SEN = " + this.myTotalPoints.toString());
          }, 2000);
        }
        else if (this.kasaTotalPoints < this.myTotalPoints) {
          setTimeout(() => {
            alert("SEN KAZANDIN TOPLAM SKOR KASA = " + this.kasaTotalPoints.toString() + " SEN = " + this.myTotalPoints.toString());
          }, 2000);
        }
        else if(this.kasaTotalPoints < this.myTotalPoints){
          setTimeout(() => {
            alert("BERABERE TOPLAM SKOR KASA = " + this.kasaTotalPoints.toString() + " SEN = " + this.myTotalPoints.toString());
          }, 2000);
        }
        else{
          setTimeout(() => {
            alert("KASA KAZANDI TOPLAM SKOR KASA = " + this.kasaTotalPoints.toString() + " SEN = " + this.myTotalPoints.toString());
          }, 2000);
        }
      }
     }
  }

  wantCard(){
      if(this.counter == 1){
        this.cardNumber++;
        this.myCards.push(this.card[this.cardNumber]);
        if(this.myCards[this.myCards.length - 1].value == "QUEEN" || this.myCards[this.myCards.length - 1].value == "KING" || this.myCards[this.myCards.length - 1].value == "JACK" || this.myCards[this.myCards.length - 1].value == "ACE"){
          this.myTotalPoints += 10;
         }
        else{
          this.myTotalPoints += parseInt(this.myCards[this.myCards.length - 1].value);
        }
        if (this.myTotalPoints > 21) {
          setTimeout(() => {
            alert("Kaybettin puan:" + this.myTotalPoints.toString());
          }, 2000);
       }

       if(this.myTotalPoints == 21){
          this.kasaAc();
       }

      }
  }

}
