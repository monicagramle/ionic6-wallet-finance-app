import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionDetailsComponent } from '../transaction-details/transaction-details.component';
import { TransactionsComponent } from '../transactions/transactions.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: '/transactions',
    component: TransactionsComponent,
  },
  {
    path: '/transactions/details',
    component: TransactionDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
