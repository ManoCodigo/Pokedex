import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { RouterModule } from '@angular/router';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { MatPaginatorModule } from '@angular/material/paginator';

// Components
import { PokeNavComponent } from './poke-nav/poke-nav.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { PokeLoadingComponent } from './poke-loading/poke-loading.component';
import { PokeErrorComponent } from './poke-error/poke-error.component';
import { PokeFooterComponent } from './poke-footer/poke-footer.component';


@NgModule({
  declarations: [
    PokeNavComponent,
    PokeSearchComponent,
    PokeListComponent,
    PokeLoadingComponent,
    PokeErrorComponent,
    PokeFooterComponent,
  ],
  imports: [
    CommonModule,
    NzPaginationModule,
    PaginationModule,
    MatPaginatorModule
  ],
  exports: [
    RouterModule,
    PokeNavComponent,
    PokeSearchComponent,
    PokeListComponent,
    PokeLoadingComponent,
    PokeErrorComponent,
    PokeFooterComponent,

  ],
})
export class SharedModule { }
