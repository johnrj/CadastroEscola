import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/index";
import { Escola } from '../model/escola.model';
import { Turma } from '../model/turma.model';
// import { ApiResponse } from '../model/apiResponse.model';
import { RotasApi } from '../rotasApi';

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) { }

    // getUsers(): Observable<ApiResponse> {
    //     return this.http.get<ApiResponse>(RotasApi.baseUrl);
    // }

    // getUserById(id: number): Observable<ApiResponse> {
    //     return this.http.get<ApiResponse>(this.baseUrl + id);
    // }

    criarEscola(escola: Escola): Observable<Escola> {
        return this.http.post<Escola>(RotasApi.escola, escola);
    }

    // updateUser(user: User): Observable<ApiResponse> {
    //     return this.http.put<ApiResponse>(this.baseUrl + user.id, user);
    // }

    // deleteUser(id: number): Observable<ApiResponse> {
    //     return this.http.delete<ApiResponse>(this.baseUrl + id);
    // }
}