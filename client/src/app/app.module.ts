import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ListaEscolasComponent } from './escola/lista-escolas/lista-escolas.component';
import { ListaTurmasComponent } from './escola/lista-turmas/lista-turmas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEscolasComponent,
    ListaTurmasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
