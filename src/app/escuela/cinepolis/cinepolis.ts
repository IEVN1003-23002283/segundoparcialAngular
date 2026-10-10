import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cinepolis',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cinepolis.html',
  styleUrl: './cinepolis.css'
})
export class Cinepolis {

  nombre: string = '';
  compradores: number = 0;
  tarjeta: string = '';
  boletos: number = 0;

  precioBoleto: number = 12;
  totalPagar: number = 0;
  mensaje: string = '';

  calcular(): void {

    this.totalPagar = 0;
    this.mensaje = '';

    if (this.nombre == '') {
      this.mensaje = 'Ingresa tu nombre';
    }
    else if (this.compradores <= 0) {
      this.mensaje = 'Ingresa una cantidad válida de compradores';
    }
    else if (this.boletos <= 0) {
      this.mensaje = 'Ingresa una cantidad válida de boletos';
    }
    else if (this.boletos > this.compradores * 7) {
      this.mensaje = 'Máximo 7 boletos por persona';
    }
    else {

      let total = this.boletos * this.precioBoleto;

      if (this.boletos > 5) {
        total = total - (total * 0.15);
      }
      else if (this.boletos >= 3) {
        total = total - (total * 0.10);
      }

      if (this.tarjeta == 'si') {
        total = total - (total * 0.10);
      }

      this.totalPagar = total;
      this.mensaje = 'Compra realizada correctamente';
    }

  }

  limpiar(): void {

    this.nombre = '';
    this.compradores = 0;
    this.tarjeta = '';
    this.boletos = 0;

    this.totalPagar = 0;
    this.mensaje = '';

  }

}
