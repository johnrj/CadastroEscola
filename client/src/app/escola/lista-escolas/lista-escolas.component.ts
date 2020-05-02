import { Component, OnInit, Input } from '@angular/core';
import { Escola } from '../../model/escola.model';
import { HttpService } from 'src/app/service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './lista-escolas.component.html',
  styleUrls: ['./lista-escolas.component.css']
})
export class ListaEscolasComponent implements OnInit {
  public escolas: Escola[];

  constructor(private httpService: HttpService, private route: ActivatedRoute, private router: Router) { }

  getEscolas = () => {
    let route: string = 'https://localhost:5001/api/escola';
    this.httpService.getData(route)
      .subscribe((res) => {
        this.escolas = res as Escola[];
      });
  }

  criarEscola = () => {
    this.router.navigate(['criar-escola']);
  }

  // editarEscola = (escolaId: number) => {
  //   alert('foi');
  //   //this.router.navigate(['editar-escola', escolaId]);
  // }

  ngOnInit(): void {
    this.getEscolas();
  }

}
