import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'calificaciones',
    loadChildren: () => import('./paginas/calificaciones/calificaciones.module').then( m => m.CalificacionesPageModule)
  },
  {
    path: 'evaluaciones',
    loadChildren: () => import('./paginas/evaluaciones/evaluaciones.module').then( m => m.EvaluacionesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
