
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MaestrosUTL } from '../maestros-utl';
import { Maestrosapi } from '../maestrosapi';

@Component({
  selector: 'app-eliminar-maestro',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './eliminar.html',
  styleUrl: './eliminar.css'
})
export class Eliminar implements OnInit {

  maestro: MaestrosUTL | null = null;
  mensaje: string = '';

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

  eliminarMaestro(): void {
    if (!this.maestro) {
      return;
    }

    this.maestrosApi.eliminarMaestro(this.maestro.idmaestro).subscribe({
      next: (response) => {
        this.mensaje = response.mensaje || response.message || '';

        if (response.exito) {
          this.router.navigate(['/maestros']);
        }
      },
      error: (error) => {
        console.error('Error al eliminar maestro:', error);
        this.mensaje = 'Error al eliminar maestro';
      }
    });
  }
}
