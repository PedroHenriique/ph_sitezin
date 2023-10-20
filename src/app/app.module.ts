// angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// rotas
import { AppRoutingModule } from './app-routing.module';

// componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    ConteudoComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
],
  providers: [],
  bootstrap: [AppComponent, ModalComponent]
})
export class AppModule { }
