import { AtividadeService } from '../atividade.service';
import { Component } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Atividade } from '../atividade';

@Component({
  selector: 'app-lista-atividades',
  standalone: false,
  templateUrl: './lista-atividades.component.html',
  styleUrls: ['./lista-atividades.component.scss']
})
export class ListaAtividadesComponent {
  atividades$: Observable<Atividade[]>;

  displayedColumns = ['id', 'name', 'descricao', 'tempo'];

  constructor(private atividadeService: AtividadeService) {
    this.atividades$ = this.atividadeService.getAtividade().pipe(
      catchError(error => {
        this.showMessage('Erro ao carregar atividades');
        return of([]); // Garante que um array vazio seja retornado em caso de erro
      })
    );
  }

  showMessage(message: string): void {
    console.error(message); // Apenas como exemplo
  }

  ngOnInit() {}
}
