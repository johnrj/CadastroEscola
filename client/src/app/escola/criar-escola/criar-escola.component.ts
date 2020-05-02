import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-criar-escola',
  templateUrl: './criar-escola.component.html',
  styleUrls: ['./criar-escola.component.css']
})
export class CriarEscolaComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  addForm: FormGroup;

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      nome: ['', Validators.required],
      endereco: ['', Validators.required]
    });
  }

  onSubmit() {
    this.apiService.criarEscola(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['criar-escola']);
      });
  }

  cancelar = () => {
    this.router.navigate(['escola']);
  }
}
