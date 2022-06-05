import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokelistComponent } from './pokelist/pokelist.component';
import { PokeviewComponent } from './pokeview/pokeview.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AbilityViewComponent } from './ability-view/ability-view.component';
import { AboutComponent } from './pokeview/components/about/about.component';
import { StatsComponent } from './pokeview/components/stats/stats.component';
import { EvolutionsComponent } from './pokeview/components/evolutions/evolutions.component';
import { MovesComponent } from './pokeview/components/moves/moves.component';

@NgModule({
  declarations: [
    PokelistComponent,
    PokeviewComponent,
    AbilityViewComponent,
    AboutComponent,
    StatsComponent,
    EvolutionsComponent,
    MovesComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    SharedModule
  ],
})
export class FeaturesModule { }
