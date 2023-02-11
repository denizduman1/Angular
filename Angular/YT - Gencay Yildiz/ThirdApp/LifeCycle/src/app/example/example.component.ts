import { OnInit } from '@angular/core';
import { Input, OnChanges, SimpleChanges } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnChanges, OnInit {
  constructor() {
    console.log("ctor çağrıldı");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges tetiklendi",changes);
  } 
  @Input() data: string;
  ngOnInit(): void {
    console.log("ngOnInit tetiklendi");
  }
  ngDoCheck(){
    console.log("Component is checked..");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit tetiklendi");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked tetiklendi");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit tetiklendi");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked tetiklendi");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy tetiklendi");
  }
}
