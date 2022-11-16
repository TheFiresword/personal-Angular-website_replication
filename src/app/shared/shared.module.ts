import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'
import { RedColorDirective } from './directives/red-coloration.directive';

@NgModule({
  declarations: [
    RedColorDirective
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSliderModule,

  ],
  exports:[
    BrowserAnimationsModule,
    MatIconModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    RedColorDirective
  ]
})
export class SharedModule { }
