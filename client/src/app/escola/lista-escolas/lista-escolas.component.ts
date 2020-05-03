import { Component, OnInit, Input } from '@angular/core';
import { Escola } from '../../model/escola.model';
import { HttpService } from 'src/app/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  templateUrl: './lista-escolas.component.html',
  styleUrls: ['./lista-escolas.component.css']
})
export class ListaEscolasComponent implements OnInit {
  constructor(private httpService: HttpService, private route: ActivatedRoute, private router: Router, private apiService: ApiService) { }
  public escolas: Escola[];

  getEscolas = () => {
    this.apiService.getEscolas()
      .subscribe((data) => {
        this.escolas = data as Escola[];
      });
  }

  criarEscola = () => {
    this.router.navigate(['criar-escola']);
  }

  editarEscola = (value) => {
    this.router.navigate(['editar-escola', value])
  }

  apagarEscola = (value) => {
    this.apiService.apagarEscola(value)
      .subscribe(res => {
        alert(`Escola ${res.nome} apagada com sucesso.`);
        this.getEscolas();
      });
  }

  ngOnInit(): void {
    this.getEscolas();
  }

}
