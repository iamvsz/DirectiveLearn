import {Directive, ElementRef, Renderer2, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appAdvancedcolortoggle]'
})
export class AdvancedcolortoggleDirective {

  @Input() colorOne: string = 'blue';
  @Input() colorTwo: string = 'green';
  private isColorOneActive = true;

  constructor(private el: ElementRef, private  renderer: Renderer2) { }

  @HostListener('click') onClick() {
    const colorToApply = this.isColorOneActive ? this.colorOne : this.colorTwo;
    this.renderer.setStyle(this.el.nativeElement, 'color', colorToApply);
    this.isColorOneActive = !this.isColorOneActive;
  }

  @HostListener('mouseleave') onMouseLeave()  {
    this.renderer.removeStyle(this.el.nativeElement, 'text-decoration');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'underline');
  }

}
