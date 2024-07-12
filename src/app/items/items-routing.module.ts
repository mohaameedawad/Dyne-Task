import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items.component';


  const routes: Routes = [
    {
      path: '', 
      redirectTo: '/home',
      pathMatch: 'full'
    },
    {
      path: ':id', 
      component: ItemsComponent 
    },
    {
      path: '**',
      redirectTo: '/home'
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
