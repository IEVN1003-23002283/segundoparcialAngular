
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MaestrosUTL } from '../maestros-utl';
import { Maestrosapi } from '../maestrosapi';

@Component({
  selector: 'app-agregar-maestro',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './agregar.html',
  styleUrl: './agregar.css'
})
export class Agregar {

  maestro: MaestrosUTL = {
    idmaestro: 0,
    nombre: '',
    apaterno: '',
    amaterno: '',
    correo: ''
  };

  mensaje: string = '';

  constructor(
    private maestrosApi: Maestrosapi,
    private router: Router
  ) {}

  guardarMaestro(): void {
    this.maestrosApi.agregarNuevoMaestro(this.maestro).subscribe({
      next: (response) => {
        this.mensaje = response.mensaje || response.message || '';

        if (response.exito) {
          this.router.navigate(['/maestros']);
        }
      },
      error: (error) => {
        console.error('Error al registrar maestro:', error);
        this.mensaje = 'Error al registrar maestro';
      }
    });
  }
}
