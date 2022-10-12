import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearProductosComponent } from './componentes/crear-productos/crear-productos.component';
import { ListarProductosComponent } from './componentes/listar-productos/listar-productos.component';
import { Error404Component } from './componentes/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearProductosComponent,
    ListarProductosComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
