import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective implements OnInit{

  constructor(private El:ElementRef) { }
  ngOnInit(){
    this.El.nativeElement.style.backgroundColor = 'green';
  }
}
