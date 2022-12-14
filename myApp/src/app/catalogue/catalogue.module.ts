import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { CataloguePage } from './catalogue.page';
import { CataloguePageRoutingModule } from './catalogue-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CataloguePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CataloguePage]
})
export class CataloguePageModule {}
