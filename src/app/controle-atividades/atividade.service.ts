import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Atividade } from './atividade';

@Injectable({
  providedIn: 'root'
})
export class AtividadeService {

constructor(private _httpClient: HttpClient) { }
private url = "http://localhost:3000/atividade";

getAtividade() : Observable<Atividade[]>{
  return this._httpClient.get<Atividade[]>(this.url);
}

setAtividade(novaAtividade: Atividade): Observable<Atividade> {
  return this._httpClient.post<Atividade>(this.url, novaAtividade);
}

}
