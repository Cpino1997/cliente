import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductosComponent } from './componentes/crear-productos/crear-productos.component';
import { Error404Component } from './componentes/error404/error404.component';
import { ListarProductosComponent } from './componentes/listar-productos/listar-productos.component';

const routes: Routes = [
  {path: '', component: ListarProductosComponent},
  {path:'crear-producto', component:CrearProductosComponent},
  {path:'editar-producto/:id', component: CrearProductosComponent},
  {path:'error404', component:Error404Component},
  {path:'**', redirectTo:'error404',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
