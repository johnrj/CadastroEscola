import { Component, OnInit, Input } from '@angular/core';
import { Escola } from 'src/_interfaces/escola.model';
import { HttpService } from 'src/app/service.service';

@Component({
  templateUrl: './lista-escolas.component.html',
  styleUrls: ['./lista-escolas.component.css']
})
export class ListaEscolasComponent implements OnInit {
  public escolas: Escola[];

  constructor(private httpService: HttpService) { }

  public getEscolas = () => {
    let route: string = 'https://localhost:5001/api/escola';
    this.httpService.getData(route)
      .subscribe((res) => {
        this.escolas = res as Escola[];
      });
  }

  ngOnInit(): void {
    this.getEscolas();
  }

}
