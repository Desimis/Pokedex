import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokelistComponent } from './pokelist/pokelist.component';
import { PokeviewComponent } from './pokeview/pokeview.component';

const routes: Routes = [
  {
      path: '', component: PokelistComponent
  },
  {
    path: ':id', component: PokeviewComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
