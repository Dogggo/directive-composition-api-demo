import {Directive, HostBinding, Input} from '@angular/core';
import {Color} from "./types/color.type";

@Directive({
  selector: '[appColor]',
  standalone: true
})
export class ColorDirective {
  @HostBinding('class') @Input() color: Color = 'primary';
}
