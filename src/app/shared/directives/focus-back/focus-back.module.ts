import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppFocusBackDirective } from './focus-back.directive';

@NgModule({
  declarations: [AppFocusBackDirective],
  imports: [CommonModule],
  exports: [AppFocusBackDirective]
})
export class FocusBackModule {}
