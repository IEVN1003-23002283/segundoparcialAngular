
import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'formulario',
    children: [
      {
        path: 'alumnos',
        loadComponent: () =>
          import('./formulario/distancia/distancia').then(
            (c) => c.Distancia
          ),
      },
      {
        path: 'zodiaco',
        loadComponent: () =>
          import('./formulario/zodiaco/zodiaco').then(
            (c) => c.Zodiaco
          ),
      }
    ]
  },

  {
    path: 'escuela',
    loadComponent: () =>
      import('./escuela/lista-escuela/lista-escuela').then(
        (c) => c.ListaEscuela
      ),
  },

  {
    path: 'alumnos',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./utl/ABCAlumnos/alumnos/alumnos').then(
            (c) => c.Alumnos
          )
      },
      {
        path: 'editar/:matricula',
        loadComponent: () =>
          import('./utl/ABCAlumnos/editar/editar').then(
            (c) => c.Editar
          )
      },
      {
        path: 'eliminar/:matricula',
        loadComponent: () =>
          import('./utl/ABCAlumnos/eliminar/eliminar').then(
            (c) => c.Eliminar
          )
      }
    ]
  },

  {
    path: 'maestros',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./utl/ABCMaestros/maestros/maestros').then(
            (c) => c.Maestros
          )
      },
      {
        path: 'agregar',
        loadComponent: () =>
          import('./utl/ABCMaestros/agregar/agregar').then(
            (c) => c.Agregar
          )
      },
      {
        path: 'editar/:idmaestro',
        loadComponent: () =>
          import('./utl/ABCMaestros/editar/editar').then(
            (c) => c.Editar
          )
      },
      {
        path: 'eliminar/:idmaestro',
        loadComponent: () =>
          import('./utl/ABCMaestros/eliminar/eliminar').then(
            (c) => c.Eliminar
          )
      }
    ]
  },

  {
    path: 'cinepolis',
    loadComponent: () =>
      import('./escuela/cinepolis/cinepolis').then(
        (c) => c.Cinepolis
      ),
  },

  {
    path: 'ventas',
    loadComponent: () =>
      import('./escuela/ventas/ventas').then(
        (c) => c.Ventas
      ),
  },

  {
    path: 'utl',
    children: [
      {
        path: 'alumnos',
        redirectTo: '/alumnos',
        pathMatch: 'full'
      },
      {
        path: 'maestros',
        redirectTo: '/maestros',
        pathMatch: 'full'
      }
    ]
  },

  {
    path: '',
    redirectTo: 'formulario/zodiaco',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: 'formulario/zodiaco'
  }

];
