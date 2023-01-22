import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  pageNumber: number = 0;
  @ViewChild('username') nameKey!: ElementRef;

  nextPage():void{
     this.pageNumber++;
  }
  setUserName(): void{
      localStorage.setItem("username",this.nameKey.nativeElement.value);
  }


}
