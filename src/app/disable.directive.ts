import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDisable]',
  standalone: true,
})
export class DisableDirective {
  @Input() set disableState(value: boolean) {
    this.renderer.setAttribute(
      this.elRef.nativeElement,
      'disabled',
      value.toString(),
    );
    this.isDisabled = value;
  }

  @HostBinding('class.disabled') isDisabled = false;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
  ) {}
}
