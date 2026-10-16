
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { registros } from '../cinepolis/cinepolis';

@Component({
  selector: 'app-ventas',
  imports: [CommonModule, FormsModule],
  templateUrl: './ventas.html',
  styleUrl: './ventas.css'
})
export class Ventas {

  ventas = registros;
  editando: number = -1;

  editar(i: number): void {
    this.editando = i;

  }
  
  eliminar(i: number) {
  this.ventas.splice(i, 1);
}

  guardar(): void {

    if (this.editando >= 0) {

      let venta = this.ventas[this.editando];

      if (venta.nombre == '') {
        return;
      }
      else if (venta.compradores <= 0) {
        return;
      }
      else if (venta.boletos <= 0) {
        return;
      }
      else if (venta.boletos > venta.compradores * 7) {
        return;
      }
      else {

        let total = venta.boletos * 12;

        if (venta.boletos > 5) {
          total = total - (total * 0.15);
        }
        else if (venta.boletos >= 3) {
          total = total - (total * 0.10);
        }

        if (venta.tarjeta == 'si') {
          total = total - (total * 0.10);
        }

        venta.total = total;
        this.editando = -1;

      }
    }
  }

}
