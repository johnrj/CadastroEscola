import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Escola } from 'src/app/model/escola.model';

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
      endereco: ['', Validators.required]
    });

    this.route.paramMap.subscribe(params => {
      this.escolaId = Number(params.get('escolaId'));
      this.apiService.getEscolaById(this.escolaId.toString())
        .subscribe(data => {
          this.escola = data
        });
    });
  }

  onSubmit() {
    // this.apiService.atualizarEscola(this.editForm.value, )
    //   .pipe(first())
    //   .subscribe(
    //     data => {
    //       if(data.status === 200) {
    //         alert('User updated successfully.');
    //         this.router.navigate(['list-user']);
    //       }else {
    //         alert(data.message);
    //       }
    //     },
    //     error => {
    //       alert(error);
    //     });
  }

  cancelar = () => {
    this.router.navigate(['escola']);
  }
}
