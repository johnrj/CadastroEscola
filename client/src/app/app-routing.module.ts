import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaEscolasComponent } from './escola/lista-escolas/lista-escolas.component';
import { ListaTurmasComponent } from './escola/lista-turmas/lista-turmas.component';

const routes: Routes = [
  {
    path: 'escola', component: ListaEscolasComponent, children: [
      {
        path: ':escolaId', component: ListaEscolasComponent, children: [
          {
            path: 'turma', component: ListaTurmasComponent
          }
        ]
      }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
