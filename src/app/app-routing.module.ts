import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home', 
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule) 
  },
  {
    path: 'menu', 
    loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule) 
  },
  { 
    path: 'items', 
    loadChildren: () => import('./items/items.module').then(m => m.ItemsModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
