import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaEscolasComponent } from './escola/lista-escolas/lista-escolas.component';
import { ListaTurmasComponent } from './escola/lista-turmas/lista-turmas.component';
import { CriarEscolaComponent } from './escola/criar-escola/criar-escola.component';
import { EditarEscolaComponent } from './escola/editar-escola/editar-escola.component';
import { CriarTurmaComponent } from './escola/criar-turma/criar-turma.component';
import { EditarTurmaComponent } from './escola/editar-turma/editar-turma.component';

const routes: Routes = [
  { path: 'escola', component: ListaEscolasComponent },
  { path: 'criar-escola', component: CriarEscolaComponent },
  { path: 'editar-escola/:escolaId', component: EditarEscolaComponent },
  { path: 'escola/:escolaId/turma', component: ListaTurmasComponent },
  { path: 'criar-turma/:escolaId', component: CriarTurmaComponent },
  { path: 'editar-turma/:escolaId/:turmaId', component: EditarTurmaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
