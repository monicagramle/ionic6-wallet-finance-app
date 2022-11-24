import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionsDetailsPage } from './transactions-details.page';

const routes: Routes = [
  {
    path: '',
    component: TransactionsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionsDetailsPageRoutingModule {}
