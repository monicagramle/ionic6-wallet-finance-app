import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { transactions } from '../model/model';
import { EtnService } from '../service/etn.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {
  transactions: transactions = {
    dateCreated: '',
    destinationAmount: 0,
    destinationWallet: '',
    fee: 0,
    id: '',
    paymentId: '',
    paymentType: 0,
    sourceWalletAddress: '',
    status: 0,
    topUpInfo : {
      etn: 0,
      instructions: '',
      logo: '',
      mobileNumber: '',
      operatorName: '',
      package: ''
  },
  txHash: '',
  txKey: ''
};

  constructor(private service: EtnService, private router: Router) {
    this.service.getData()
    .subscribe(data => {
         this.transactions = data.transactions;
   });
   }

  ngOnInit() {
  }

  getDetails(id: string) {
    this.router.navigate(['transactions' , id]);
  }

  getTransactionType(id: number): string {
    if (id === 1) {
        return 'Received';
    }

    if (id === 2) {
        return 'Sent';
    }

    if (id === 3) {
      return 'Top Up';
  }

    return 'Unknown';
}

getTransactionStatus(id: number): string {
  if (id === 1) {
      return 'Pending';
  }

  if (id === 2) {
      return 'Complete';
  }

  if (id === 3) {
    return 'Failed';
}

  return 'Unknown';
}

}
