import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/index";
import { Escola } from '../model/escola.model';
import { Turma } from '../model/turma.model';
import { RotasApi } from '../rotasApi';

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) { }

    getEscolas(): Observable<Escola[]> {
        return this.http.get<Escola[]>(RotasApi.escola);
    }

    getEscolaById(escolaId: string): Observable<Escola> {
        return this.http.get<Escola>(RotasApi.escolaId.replace(':escolaId', escolaId));
    }

    criarEscola(escola: Escola): Observable<Escola> {
        return this.http.post<Escola>(RotasApi.escola, escola);
    }

    atualizarEscola(escola: Escola, escolaId: string): Observable<Escola> {
        return this.http.put<Escola>(RotasApi.escolaId.replace(':escolaId', escolaId), escola);
    }

    apagarEscola(escolaId: string): Observable<Escola> {
        return this.http.delete<Escola>(RotasApi.escolaId.replace(':escolaId', escolaId));
    }

    getTurmas(escolaId: string): Observable<Turma[]> {
        return this.http.get<Turma[]>(RotasApi.turma.replace(':escolaId', escolaId));
    }

    getTurmaById(escolaId: string, turmaId: string): Observable<Turma> {
        return this.http.get<Turma>(RotasApi.turmaId.replace(':escolaId', escolaId).replace(':id', turmaId));
    }

    criarTurma(turma: Turma): Observable<Turma> {
        return this.http.post<Turma>(RotasApi.turma.replace(':escolaId', turma.escolaId), turma);
    }

    atualizarTurma(turma: Turma): Observable<Turma> {
        return this.http.put<Turma>(RotasApi.turmaId.replace(':escolaId', turma.escolaId).replace(':id', turma.id), turma);
    }

    apagarTurma(escolaId: string, turmaId: string): Observable<Turma> {
        return this.http.delete<Turma>(RotasApi.turmaId.replace(':escolaId', escolaId).replace(':id', turmaId));
    }
}