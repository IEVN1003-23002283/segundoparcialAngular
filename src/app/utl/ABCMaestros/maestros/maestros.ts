
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MaestrosUTL } from '../maestros-utl';
import { Maestrosapi } from '../maestrosapi';

@Component({
  selector: 'app-maestros',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './maestros.html',
  styleUrl: './maestros.css'
})
export class Maestros implements OnInit {

  listFilter: string = '';
  dataSource: MaestrosUTL[] = [];
  mensaje: string = '';

  constructor(private maestrosApi: Maestrosapi) {}

  ngOnInit(): void {
    this.cargarMaestros();
  }

  get maestrosFiltrados(): MaestrosUTL[] {
    return this.dataSource.filter(maestro =>
      maestro.nombre.toLowerCase().includes(this.listFilter.toLowerCase())
    );
  }

  cargarMaestros(): void {
    this.maestrosApi.getMaestros().subscribe({
      next: (response: MaestrosUTL[]) => {
        console.log('Datos recibidos del API:', response);
        this.dataSource = response;
      },
      error: (error) => {
        console.error('Error al consultar maestros:', error);
        this.mensaje = 'Error al cargar los maestros';
        this.dataSource = [];
      },
      complete: () => {
        console.log('Carga de maestros finalizada');
      }
    });
  }
}
