import { ListaAtividadesComponent } from './lista-atividades/lista-atividades.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';




@NgModule({
  declarations: [
    ListaAtividadesComponent  
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatCardModule       
  ],
  exports:[
    ListaAtividadesComponent   
  ]
})
export class ControleAtividadesModule { }
