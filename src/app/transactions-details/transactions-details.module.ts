import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransactionsDetailsPageRoutingModule } from './transactions-details-routing.module';

import { TransactionsDetailsPage } from './transactions-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransactionsDetailsPageRoutingModule
  ],
  declarations: [TransactionsDetailsPage]
})
export class TransactionsDetailsPageModule {}
