
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MaestrosUTL } from '../maestros-utl';
import { Maestrosapi } from '../maestrosapi';

@Component({
  selector: 'app-editar-maestro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './editar.html',
  styleUrl: './editar.css'
})
export class Editar implements OnInit {

  maestro: MaestrosUTL = {
    idmaestro: 0,
    nombre: '',
    apaterno: '',
    amaterno: '',
    correo: ''
  };

  mensaje: string = '';
  cargado: boolean = false;

  constructor(
    private maestrosApi: Maestrosapi,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idmaestro = Number(this.route.snapshot.paramMap.get('idmaestro'));

    if (!idmaestro) {
      this.mensaje = 'ID de maestro no válido';
      return;
    }

    this.maestrosApi.getMaestro(idmaestro).subscribe({
      next: (response) => {
        if (response) {
          this.maestro = response;
          this.cargado = true;
        } else {
          this.mensaje = 'Maestro no encontrado';
        }
      },
      error: (error) => {
        console.error('Error al consultar maestro:', error);
        this.mensaje = 'Error al cargar maestro';
      }
    });
  }

  actualizarMaestro(): void {
    this.maestrosApi.actualizarMaestro(
      this.maestro.idmaestro,
      this.maestro
    ).subscribe({
      next: (response) => {
        this.mensaje = response.mensaje || response.message || '';

        if (response.exito) {
          this.router.navigate(['/maestros']);
        }
      },
      error: (error) => {
        console.error('Error al actualizar maestro:', error);
        this.mensaje = 'Error al actualizar maestro';
      }
    });
  }
}
