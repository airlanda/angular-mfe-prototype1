import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShashQuashComponent } from './shash-quash.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'shash',
    pathMatch: 'full'
  },
  {
    path: 'shash',
    component: ShashQuashComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShashRoutingModule { }
