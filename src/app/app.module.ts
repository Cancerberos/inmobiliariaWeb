import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OlMapsModule } from './ol-maps/ol-maps.module';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { SecureComponent } from './secure/secure.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DatosUsuarioComponent } from './pages/datos-usuario/datos-usuario.component';
import { ListaAvisosComponent } from './pages/lista-avisos/lista-avisos.component';
import { DetalleAvisoComponent } from './pages/detalle-aviso/detalle-aviso.component';
import { AvisoComponent } from './pages/aviso/aviso.component';
import { ConsultaAvisoComponent } from './pages/consulta-aviso/consulta-aviso.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    SecureComponent,
    NotFoundComponent,
    DatosUsuarioComponent,
    ListaAvisosComponent,
    DetalleAvisoComponent,
    AvisoComponent,
    ConsultaAvisoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatDatepickerModule,
    MatProgressBarModule,
    MatExpansionModule,
    NgbModule,
    OlMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
