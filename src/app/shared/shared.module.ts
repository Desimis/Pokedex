import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PokemonIdPipe } from './pipes/pokemon-id.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { FlavourTextPipe } from './pipes/flavour-text.pipe';
import { EggGroupPipe } from './pipes/egg-group.pipe';
import { WeaknessesPipe } from './pipes/weaknesses.pipe';
import { StatNamePipe } from './pipes/stat-name.pipe';
import { StatTotalPipe } from './pipes/stat-total.pipe';

@NgModule({
  declarations: [
    PokemonIdPipe,
    CapitalizePipe,
    FlavourTextPipe,
    EggGroupPipe,
    WeaknessesPipe,
    StatNamePipe,
    StatTotalPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MatToolbarModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    ScrollingModule,
    PokemonIdPipe,
    CapitalizePipe,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatDividerModule,
    FlavourTextPipe,
    EggGroupPipe,
    WeaknessesPipe,
    StatNamePipe,
    StatTotalPipe
  ]
})
export class SharedModule { }
