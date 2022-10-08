import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DatosUsuarioComponent } from './pages/datos-usuario/datos-usuario.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SecureComponent } from './secure/secure.component';
import { ListaAvisosComponent } from './pages/lista-avisos/lista-avisos.component';
import { DetalleAvisoComponent } from './pages/detalle-aviso/detalle-aviso.component';
import { AvisoComponent } from './pages/aviso/aviso.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "login", component: LoginComponent},
  { path: "datos-usuario", component: DatosUsuarioComponent},
  { path: "lista-avisos", component: ListaAvisosComponent},
  { path: "aviso", component: AvisoComponent},
  { path: "detalle-aviso/:id", component: DetalleAvisoComponent},
  { path: '', redirectTo: 'secure', pathMatch: 'full' },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
