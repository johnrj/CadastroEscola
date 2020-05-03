import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Turma } from 'src/app/model/turma.model';
import { first } from "rxjs/operators";

@Component({
  selector: 'app-editar-turma',
  templateUrl: './editar-turma.component.html',
  styleUrls: ['./editar-turma.component.css']
})
export class EditarTurmaComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private apiService: ApiService) { }
  escolaId: number;
  turmaId: number;
  turma: Turma;
  editForm: FormGroup;

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      id: ['', Validators.required],
      escolaId: ['', Validators.required],
      numero: ['', Validators.required],
      numeroAlunos: ['', Validators.required],
      escola: []
    });

    this.route.paramMap.subscribe(params => {
      this.escolaId = Number(params.get('escolaId'));
      this.turmaId = Number(params.get('turmaId'));

      this.apiService.getTurmaById(this.escolaId.toString(), this.turmaId.toString())
        .subscribe(data => this.editForm.setValue(data));
    });
  }

  onSubmit() {
    this.apiService.atualizarTurma(this.editForm.value)
      .pipe(first())
      .subscribe(
        res => {
          alert('Turma atualizada com sucesso.');
          this.apiService.getTurmaById(this.escolaId.toString(), this.turmaId.toString())
            .subscribe(data => this.editForm.setValue(data));
        },
        error => {
          alert('Erro ao atualizar turma.');
          console.log(JSON.stringify(error));
        });
  }

  cancelar = () => {
    this.router.navigate(['escola', this.escolaId, 'turma']);
  }
}
