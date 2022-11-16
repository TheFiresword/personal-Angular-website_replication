import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ListeLivretsComponent } from './components/liste-livrets/liste-livrets.component';
import { LivretComponent } from './components/livret/livret.component';
import { UneImageDefilanteComponent } from './components/une-image-defilante/une-image-defilante.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    AccueilComponent, ListeLivretsComponent, LivretComponent,
    UneImageDefilanteComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    
  ],
  exports:[
    AccueilComponent, ListeLivretsComponent, LivretComponent,
    UneImageDefilanteComponent
  ]
})
export class AccueilModule { }
