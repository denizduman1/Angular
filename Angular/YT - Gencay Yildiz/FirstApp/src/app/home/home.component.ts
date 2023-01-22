import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    title = "Home Component Title";
    style = "background-color:green; color:white; margin-left:20px; font-size: 30px; cursor:pointer";
    @Input() pageName : string = "";
    

}
