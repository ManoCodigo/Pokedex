import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules

// Components
import { PokeNavComponent } from './poke-nav/poke-nav.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PokeNavComponent,
    PokeSearchComponent,
    PokeListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PokeNavComponent,
    PokeSearchComponent,
    PokeListComponent,
    RouterModule
  ]
})
export class SharedModule { }
