import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Shuffle } from 'src/app/model/shuffle';
import { Cards } from 'src/app/model/cards';


@Injectable({
  providedIn: 'root'
})
export class GameService {
  getShuffle(){
    return this.http.get<Shuffle>("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
  }
  getCard(deck_id:string){
    var urlStart = "https://deckofcardsapi.com/api/deck/";
    var urlEnd = "/draw/?count=52";
    var urlFull = urlStart + deck_id + urlEnd;
    return this.http.get<Cards>(urlFull);
  }
  constructor(private http: HttpClient) { }
}
