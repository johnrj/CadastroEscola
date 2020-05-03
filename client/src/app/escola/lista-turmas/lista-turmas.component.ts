import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Turma } from '../../model/turma.model';
import { HttpService } from 'src/app/service.service';
import { Escola } from '../../model/escola.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  templateUrl: './lista-turmas.component.html',
  styleUrls: ['./lista-turmas.component.css']
})
export class ListaTurmasComponent implements OnInit {
  public escolaId: number;
  public escola: Escola;
  public turmas: Turma[];
  constructor(private httpService: HttpService, private route: ActivatedRoute, private router: Router, private apiService: ApiService) { }

  private getEscola = () => {
    let route: string = `https://localhost:5001/api/escola/${this.escolaId}`;
    this.httpService.getData(route)
      .subscribe((res) => {
        this.escola = res as Escola;
      });
  }

  public getTurmas = () => {
    let route: string = `https://localhost:5001/api/escola/${this.escolaId}/turma`;
    this.httpService.getData(route)
      .subscribe((res) => {
        this.turmas = res as Turma[];
      })
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.escolaId = Number(params.get('escolaId'));
      this.getEscola();
      this.getTurmas();
    });
  }

  adicionarTurma = () => {
    this.router.navigate(['criar-turma', this.escolaId]);
  }

  apagarTurma = (value) => {
    this.apiService.apagarTurma(this.escolaId.toString(), value)
      .subscribe(res => {
        alert(`Turma ${res.numero} apagada com sucesso.`);
        this.getTurmas();
      });
  }
}
