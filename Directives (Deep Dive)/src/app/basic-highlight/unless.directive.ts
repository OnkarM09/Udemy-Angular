import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(value: boolean) {
    if (!value) {
      this.viewRef.createEmbeddedView(this.templateRef);
    }else{
      this.viewRef.clear();
    }
  }

  constructor(private templateRef : TemplateRef<any>, private viewRef : ViewContainerRef) { }

}
