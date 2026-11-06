
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlumnosUTL } from './alumnosUTL';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoapiService {

  private apiUrl = 'http://127.0.0.1:5000/api/alumnos/';

  constructor(private http: HttpClient) {}

  public getAlumnos(): Observable<AlumnosUTL[]> {
    return this.http.get<{ alumnos: AlumnosUTL[] }>(
      this.apiUrl
    ).pipe(
      map(response => response.alumnos)
    );
  }

  agregarNuevoAlumno(datos: AlumnosUTL) {
    return this.http.post(
      this.apiUrl,
      datos
    );
  }
}
