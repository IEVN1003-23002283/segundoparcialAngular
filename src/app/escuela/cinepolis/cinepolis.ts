
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-cinepolis',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cinepolis.html',
  styleUrl: './cinepolis.css'
})
export class Cinepolis {

  precioBoleto = 12000;
  totalPagar = 0;
  mensaje = '';

  formulario = new FormGroup({
    nombre: new FormControl('', Validators.required),
    compradores: new FormControl(1, [
      Validators.required,
      Validators.min(1)
    ]),
    tarjeta: new FormControl('no'),
    boletos: new FormControl(1, [
      Validators.required,
      Validators.min(1)
    ])
  });

  procesar() {

    if (this.formulario.invalid) {
      this.mensaje = 'Completa todos los campos';
      this.totalPagar = 0;
      return;
    }

    const compradores = Number(this.formulario.value.compradores);
    const boletos = Number(this.formulario.value.boletos);
    const tarjeta = this.formulario.value.tarjeta;

    if (!Number.isInteger(compradores) ||
        !Number.isInteger(boletos)) {
      this.mensaje = 'Ingresa cantidades enteras';
      this.totalPagar = 0;
      return;
    }

    if (boletos > compradores * 7) {
      this.mensaje = 'Máximo 7 boletos por persona';
      this.totalPagar = 0;
      return;
    }

    let total = boletos * this.precioBoleto;

    // Descuento por cantidad de boletos
    if (boletos > 5) {
      total = total - (total * 0.15);
    } else if (boletos >= 3) {
      total = total - (total * 0.10);
    }

    // Descuento adicional por tarjeta Cinéco
    if (tarjeta === 'si') {
      total = total - (total * 0.10);
    }

    this.totalPagar = total;
    this.mensaje = 'Compra procesada correctamente';
  }

  limpiar() {
    this.formulario.reset({
      nombre: '',
      compradores: 1,
      tarjeta: 'no',
      boletos: 1
    });

    this.totalPagar = 0;
    this.mensaje = '';
  }
}
