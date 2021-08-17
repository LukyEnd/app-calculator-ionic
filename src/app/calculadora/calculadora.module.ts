import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

import { calculatorComponent } from './components';
import { calculatorService } from './services';

@NgModule({
  declarations: [
    calculatorComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    calculatorComponent,
  ],
  providers: [
    calculatorService,
  ]
})
export class CalculadoraModule { }
