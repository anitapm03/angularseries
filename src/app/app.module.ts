import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { appRoutingProvider, routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServicePersonajes } from './services/service.personajes';
import { ServiceSeries } from './services/service.series';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { SerieComponent } from './components/serie/serie.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { CrearpersonajeComponent } from './components/crearpersonaje/crearpersonaje.component';
import { ModificarpersonajeComponent } from './components/modificarpersonaje/modificarpersonaje.component';
import { ModificarhijoComponent } from './components/modificarhijo/modificarhijo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    SerieComponent,
    PersonajesComponent,
    CrearpersonajeComponent,
    ModificarpersonajeComponent,
    ModificarhijoComponent
  ],
  imports: [
    BrowserModule, routing, FormsModule, HttpClientModule
  ],
  providers: [appRoutingProvider, ServicePersonajes, ServiceSeries],
  bootstrap: [AppComponent]
})
export class AppModule { }
