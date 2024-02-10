import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private renderer : Renderer2, private elemRef : ElementRef) { }
  @Input() defaultColor : string = 'green';
  @Input() hoverColor : string = 'teal';

  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(
    //   this.elemRef.nativeElement, 'backgroundColor','teal'
    //   //Renderer is recommended
    // );
    this.backgroundColor= this.defaultColor;
  }

  @HostListener('mouseleave') mouseout(eventData: Event){
    // this.renderer.setStyle(
    //   this.elemRef.nativeElement, 'backgroundColor','dodgerblue'
    // )
    this.backgroundColor = this.hoverColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor! : string;



  ngOnInit(): void {
    console.log(this.elemRef.nativeElement)
  }
}
