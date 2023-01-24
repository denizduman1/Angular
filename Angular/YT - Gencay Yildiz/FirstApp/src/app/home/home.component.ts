import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    title = "Home Component Title";
    style = "background-color:green; color:white; margin-left:20px; font-size: 30px; cursor:pointer";
    color = "color: red;";
    @Input() pageName : string = "";
    deger : string = "örnek";
    onChange(a:string){
      if (a.length > 10) {
          this.color = "color: green;";
      }
      else{
        this.color = "color: red;";
      }
    }
}
