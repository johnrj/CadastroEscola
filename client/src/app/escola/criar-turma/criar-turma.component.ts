import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Turma } from 'src/app/model/turma.model';

@Component({
  selector: 'app-criar-turma',
  templateUrl: './criar-turma.component.html',
  styleUrls: ['./criar-turma.component.css']
})
export class CriarTurmaComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private apiService: ApiService) { }
  addForm: FormGroup;
  escolaId: Number;

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      escolaId: ['', Validators.required],
      numero: ['', Validators.required],
      numeroAlunos: ['', Validators.required]
    });

    this.route.paramMap.subscribe(params => {
      this.escolaId = Number(params.get('escolaId'));
    });
  }

  onSubmit() {
    this.addForm.value.escolaId = this.escolaId;
    this.apiService.criarTurma(this.addForm.value)
      .subscribe(data => {
        this.addForm.reset();
        alert(`Turma ${data.numero} adicionada com sucesso`);
      });
  }

  cancelar = () => {
    this.router.navigate(['escola', this.escolaId, 'turma']);
  }
}
