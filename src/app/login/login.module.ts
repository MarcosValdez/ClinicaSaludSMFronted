import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { AdministrativoComponent } from './components/administrativo/administrativo.component';
import { AtencionGeneralComponent } from './components/atencion-general/atencion-general.component';
import { HomeComponent } from './components/home/home.component';
import { Paciente } from '../paciente/model/paciente';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DoctorComponent } from './components/doctor/doctor.component';

@NgModule({
  declarations: [
    LoginComponent,
    AdministrativoComponent,
    AtencionGeneralComponent,
    HomeComponent,
    DoctorComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LoginModule {}
