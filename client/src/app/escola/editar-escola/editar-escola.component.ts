import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Escola } from 'src/app/model/escola.model';
import { first } from "rxjs/operators";

@Component({
  selector: 'app-editar-escola',
  templateUrl: './editar-escola.component.html',
  styleUrls: ['./editar-escola.component.css']
})
export class EditarEscolaComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private apiService: ApiService) { }
  escolaId: number;
  escola: Escola;
  editForm: FormGroup;

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      id: ['', Validators.required],
      nome: ['', Validators.required],
      endereco: ['', Validators.required],
      turmas: []
    });

    this.route.paramMap.subscribe(params => {
      this.escolaId = Number(params.get('escolaId'));

      this.apiService.getEscolaById(this.escolaId.toString())
        .subscribe(data => this.editForm.setValue(data));
    });
  }

  onSubmit() {
    this.apiService.atualizarEscola(this.editForm.value, this.escolaId.toString())
      .pipe(first())
      .subscribe(
        res => {
          alert('Escola atualizada com sucesso.');
          this.router.navigate(['editar-escola', this.escolaId]);
        },
        error => {
          alert('Erro ao atualizar escola.');
          console.log(JSON.stringify(error));
        });
  }

  adicionarTurma = () => {
    this.router.navigate(['criar-turma', this.escolaId]);
  }

  cancelar = () => {
    this.router.navigate(['escola']);
  }
}
