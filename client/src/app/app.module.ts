import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListaEscolasComponent } from './escola/lista-escolas/lista-escolas.component';
import { ListaTurmasComponent } from './escola/lista-turmas/lista-turmas.component';
import { HeaderComponent } from './header/header.component';
import { CriarEscolaComponent } from './escola/criar-escola/criar-escola.component';
import { EditarEscolaComponent } from './escola/editar-escola/editar-escola.component';
import { EditarTurmaComponent } from './escola/editar-turma/editar-turma.component';
import { CriarTurmaComponent } from './escola/criar-turma/criar-turma.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './services/api.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { TokenInterceptor } from "./core/interceptor";

@NgModule({
  declarations: [
    AppComponent,
    ListaEscolasComponent,
    ListaTurmasComponent,
    HeaderComponent,
    CriarEscolaComponent,
    EditarEscolaComponent,
    EditarTurmaComponent,
    CriarTurmaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {

}
