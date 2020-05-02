import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/index";
import { Escola } from '../model/escola.model';
import { Turma } from '../model/turma.model';
import { RotasApi } from '../rotasApi';

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) { }

    getEscolaById(escolaId: string): Observable<Escola> {
        return this.http.get<Escola>(RotasApi.escolaId.replace(':escolaId', escolaId));
    }

    // getUserById(id: number): Observable<ApiResponse> {
    //     return this.http.get<ApiResponse>(this.baseUrl + id);
    // }

    criarEscola(escola: Escola): Observable<Escola> {
        return this.http.post<Escola>(RotasApi.escola, escola);
    }

    atualizarEscola(escola: Escola, escolaId: string): Observable<Escola> {
        return this.http.put<Escola>(RotasApi.escolaId.replace(':escolaId', escolaId), escola);
    }

    // deleteUser(id: number): Observable<ApiResponse> {
    //     return this.http.delete<ApiResponse>(this.baseUrl + id);
    // }
}