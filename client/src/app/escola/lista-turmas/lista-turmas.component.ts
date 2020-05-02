import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Turma } from 'src/_interfaces/turma.model';
import { HttpService } from 'src/app/service.service';

@Component({
  templateUrl: './lista-turmas.component.html',
  styleUrls: ['./lista-turmas.component.css']
})
export class ListaTurmasComponent implements OnInit {
  public escolaId: number;
  public turmas: Turma[];
  constructor(private httpService: HttpService, private route: ActivatedRoute, private router: Router) { }

  public getTurmas = () => {
    console.log('getTurmas');
    let route: string = `https://localhost:5001/api/escola/${this.escolaId}/turma`;
    this.httpService.getData(route)
      .subscribe((res) => {
        this.turmas = res as Turma[];
      })
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.route.paramMap.subscribe(params => {
      this.escolaId = Number(params.get('escolaId'));
      this.getTurmas();
    });
  }
}
