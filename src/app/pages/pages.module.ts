import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { PagesRoutingModule } from './pages.routing.module';
import { SharedModule } from '../shared/shared.module';

// Components
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    RouterModule
  ],
  exports: [
  ]
})
export class PagesModule { }
