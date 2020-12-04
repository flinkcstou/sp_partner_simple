import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appClassDecorator]'
})
export class ClickClassDecoratorDirective {

  @Input() appendingClasses: string[] | string;

  constructor(private el: ElementRef) {
  }

  @HostListener('ionFocus', ['$event'])
  ionFocusEvent() {
    if (!this.appendingClasses) {
      return;
    }
    if (typeof this.appendingClasses === 'string') {
      this.el.nativeElement.classList.add(this.appendingClasses);
    } else {
      this.el.nativeElement.classList.add(...this.appendingClasses);
    }
  }

  @HostListener('ionBlur', ['$event'])
  ionBlurEvent(event) {
    if (!this.appendingClasses) {
      return;
    }
    if (typeof this.appendingClasses === 'string') {
      this.el.nativeElement.classList.remove(this.appendingClasses);
    } else {
      for (const className of this.appendingClasses) {
        this.el.nativeElement.classList.remove(className);
      }
    }
  }

}
