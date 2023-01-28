import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';
import { Input,OnInit } from "@angular/core";

@Directive({
  selector: '[appExample]'
})
export class ExampleDirective implements OnInit {
  
  @Input() color:string = "";

  constructor(private element: ElementRef) {
      
  }
  
  ngOnInit(): void {
      this.element.nativeElement.style.color = this.color;
      this.element.nativeElement.style.padding = "10px";
      $(this.element.nativeElement).fadeOut(2000).fadeIn();
  }

  @HostListener("click")
  onClick(){
    alert("html nesnesi click edildi");
  }

  @HostBinding("style.color")
    writingColor: string = "orange";

}
