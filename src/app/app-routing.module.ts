import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inventario-actual',
    pathMatch: 'full'
  },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // },
  {
    path: 'cortes-administrativos',
    loadChildren: () => import('./pages/admin-cuts/admin-cuts.module').then(m => m.AdminCutsPageModule)
  },
  {
    path: 'inventario-actual',
    loadChildren: () => import('./pages/inventario-actual/inventario-actual.module').then( m => m.InventarioActualPageModule),
  },
  {
    path: 'punto-de-venta',
    loadChildren: () => import('./pages/punto-de-venta/punto-de-venta.module').then( m => m.PuntoDeVentaPageModule)
  },
  {
    path: 'salidas',
    loadChildren: () => import('./pages/salidas/salidas.module').then( m => m.SalidasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
