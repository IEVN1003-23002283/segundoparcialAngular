import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-zodiaco',
  standalone: true,
  imports: [FormsModule],
  styleUrl: './zodiaco.css',
  templateUrl: './zodiaco.html',
})
export class Zodiaco {

  nombre: string = '';
  apellidoPaterno: string = '';
  apellidoMaterno: string = '';

  dia: number = 0;
  mes: number = 0;
  anio: number = 0;

  sexo: string = '';

  edad: number = 0;
  signo: string = '';
  imagen: string = '';
  mensaje: string = '';

  calcular(): void {

   
    this.edad = 2026 - this.anio;

    if (this.mes > 10) {
      this.edad = this.edad - 1;
    }
    else if (this.mes == 10 && this.dia > 3) {
      this.edad = this.edad - 1;
    }

   
    let resultado = this.anio % 12;

    if (resultado == 0) {
      this.signo = 'Mono';
      this.imagen = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBmElSeW9m4R1u6q1Jy4f-rwolmf01J_8aK7zWlQhisg&s=10';
    }
    else if (resultado == 1) {
      this.signo = 'Gallo';
      this.imagen = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdb1sorsKTNllj-8NDLFt9kx2vnskPRDa5fX0zkmfHSA&s=10';
    }
    else if (resultado == 2) {
      this.signo = 'Perro';
      this.imagen = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Sau36nLx0E3GBe1fms1JoU4i_QieavZUOb4kop-zyw&s=10';
    }
    else if (resultado == 3) {
      this.signo = 'Cerdo';
      this.imagen = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp6m9jV1Jo_JnPmrgpW14ENmrrTDgvclJPvFJcNQ5Tlw&s=10';
    }
    else if (resultado == 4) {
      this.signo = 'Rata';
      this.imagen = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIn95SDkSot47SzRErbizOfzCKOA9g-ujSJp83IxuT5w&s=10';
    }
    else if (resultado == 5) {
      this.signo = 'Buey';
      this.imagen = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX9_kYXyQi-6CfQEISBfQWiwVX2PIJw-fKZNub2QukOg&s=10';
    }
    else if (resultado == 6) {
      this.signo = 'Tigre';
      this.imagen = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNIPq10zOdf7Wd3_bKIExn2uiCZZZaRggilKGeBukRhA&s=10';
    }
    else if (resultado == 7) {
      this.signo = 'Conejo';
      this.imagen = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbRpm9F7dGyLHaJxWJZFpszIp3Qz-5dzm5njlfF7HCzQ&s=10';
    }
    else if (resultado == 8) {
      this.signo = 'Dragón';
      this.imagen = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDu0xBuhAWS0fLpSQ8KqYczQn-ctPCLGVmxP5rcMOXfQ&s=10';
    }
    else if (resultado == 9) {
      this.signo = 'Serpiente';
      this.imagen = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh1Zoh68HD6dTV0ixDjEEjmtPPWLzxifeB1iKbjGmsvA&s=10';
    }
    else if (resultado == 10) {
      this.signo = 'Caballo';
      this.imagen = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPpW3pnEaKTgD6xWDBqaV9yzVvnMz1PtZlWMAz5DjvSA&s=10';
    }
    else {
      this.signo = 'Cabra';
      this.imagen = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSEtv0G9VZVRov5wwBfIjJA65B2DiZ7dNp-ZFcnCDztg&s=10';
    }

   
    this.mensaje = 'Bienvenido, ' + this.nombre + ' ' + this.apellidoPaterno + ' ' + this.apellidoMaterno;
  }
}