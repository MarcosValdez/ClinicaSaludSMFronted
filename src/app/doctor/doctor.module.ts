import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorRegistradoComponent } from './components/doctor-registrado/doctor-registrado.component';
import { RegistrarDoctorComponent } from './components/registrar-doctor/registrar-doctor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SortPipe } from './pipe/sort.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './pipes/filter.pipe';
import { PanelDoctorComponent } from './components/panel-doctor/panel-doctor.component';

@NgModule({
  declarations: [FilterPipe, DoctorRegistradoComponent, RegistrarDoctorComponent, SortPipe, FilterPipe, PanelDoctorComponent],
  imports: [CommonModule,NgxPaginationModule, FormsModule, DoctorRoutingModule, ReactiveFormsModule],
})
export class DoctorModule { }
