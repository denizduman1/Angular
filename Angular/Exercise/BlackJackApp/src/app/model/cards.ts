export class Card{
    code:string = "";
    image: string = "";
    value: string = "";
    suit: string = "";
}

export class Cards{
    success: boolean = false;
    deck_id: string = "";
    cards: Card[] = [];
}