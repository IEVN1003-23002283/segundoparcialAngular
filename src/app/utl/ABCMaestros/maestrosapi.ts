
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { MaestrosUTL } from './maestros-utl';

interface RespuestaAPI {
  mensaje?: string;
  message?: string;
  exito: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class Maestrosapi {

  private apiUrl = 'http://127.0.0.1:5000/api/maestros/';

  constructor(private http: HttpClient) {}

  getMaestros(): Observable<MaestrosUTL[]> {
    return this.http.get<{ maestros: MaestrosUTL[] }>(
      this.apiUrl
    ).pipe(
      map(response => response.maestros)
    );
  }

  getMaestro(idmaestro: number): Observable<MaestrosUTL | null> {
    return this.http.get<{ maestro: MaestrosUTL | null }>(
      this.apiUrl + idmaestro
    ).pipe(
      map(response => response.maestro)
    );
  }

  agregarNuevoMaestro(datos: MaestrosUTL): Observable<RespuestaAPI> {
    return this.http.post<RespuestaAPI>(
      this.apiUrl,
      datos
    );
  }

  actualizarMaestro(idmaestro: number, datos: MaestrosUTL): Observable<RespuestaAPI> {
    return this.http.put<RespuestaAPI>(
      this.apiUrl + idmaestro,
      datos
    );
  }

  eliminarMaestro(idmaestro: number): Observable<RespuestaAPI> {
    return this.http.delete<RespuestaAPI>(
      this.apiUrl + idmaestro
    );
  }
}
