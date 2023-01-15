export class Model {
    user : string;
    items : TodoItem[];
    /**
     *
     */
    constructor() {
       this.user = "Deniz";
       this.items = [
        new TodoItem("Kahvaltı",true),
        new TodoItem("Spor",false),
        new TodoItem("Ders",true)
      ];
    }
}


export class TodoItem{
    description:string;
    action:boolean;

    /**
     *
     */
    constructor(desc: string, action: boolean) {
        this.description = desc;
        this.action = action;        
    }
}