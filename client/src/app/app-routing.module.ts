import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaEscolasComponent } from './escola/lista-escolas/lista-escolas.component';
import { ListaTurmasComponent } from './escola/lista-turmas/lista-turmas.component';
import { CriarEscolaComponent } from './escola/criar-escola/criar-escola.component';

const routes: Routes = [
  { path: 'escola', component: ListaEscolasComponent },
  { path: 'criar-escola', component: CriarEscolaComponent },
  { path: 'escola/:escolaId/turma', component: ListaTurmasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
