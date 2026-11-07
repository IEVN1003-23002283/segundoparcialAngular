
import { AlumnosUTL } from '../alumnosUTL';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProyectoapiService } from '../alumnosapi.service';
import { AlumnoFilterPipe } from '../alumnos-filter.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [FormsModule, AlumnoFilterPipe, CommonModule, RouterLink],
  templateUrl: './alumnos.html',
})
export class Alumnos implements OnInit {

  listFilter: string = '';
  alumnoTitle: string = '';
  dataSource: AlumnosUTL[] = [];

  constructor(private alumnosUtl: ProyectoapiService) {}

  ngOnInit(): void {
    this.cargarAlumnos();
  }

  cargarAlumnos(): void {
    this.alumnosUtl.getAlumnos().subscribe({
      next: (response: AlumnosUTL[]) => {
        console.log('Datos recibidos del API:', response);
        this.dataSource = response;
      },
      error: (error) => {
        console.error('Error al consultar el API:', error);
        this.dataSource = [];
      },
      complete: () => {
        console.log('Carga de alumnos finalizada');
      }
    });
  }
}
