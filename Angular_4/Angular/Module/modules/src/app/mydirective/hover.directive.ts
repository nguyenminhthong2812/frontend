import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit{

  constructor(private El:ElementRef, private renderer2:Renderer2) { }
  ngOnInit(){
    this.renderer2.setStyle(this.El.nativeElement,'background-color','blue');
    this.renderer2.setStyle(this.El.nativeElement,'color','white');
  }

  @HostListener('mouseenter') SuKienHover(){
    this.renderer2.setStyle(this.El.nativeElement,'background-color','red');
    // this.renderer2.setStyle(this.El.nativeElement,'color','white');
  }
  @HostListener('mouseleave') SuKienLeave(){
    this.renderer2.setStyle(this.El.nativeElement,'background-color','blue');
    // this.renderer2.setStyle(this.El.nativeElement,'color','white');
  }
}
