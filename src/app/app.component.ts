import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ControleAtividadesModule } from './controle-atividades/controle-atividades.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ControleAtividadesModule],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})
export class AppComponent {
  title = 'DayControl';
}
