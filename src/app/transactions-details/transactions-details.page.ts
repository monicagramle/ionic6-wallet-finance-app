import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { transactions } from '../model/model';
import { EtnService } from '../service/etn.service';

@Component({
  selector: 'app-transactions-details',
  templateUrl: './transactions-details.page.html',
  styleUrls: ['./transactions-details.page.scss'],
})
export class TransactionsDetailsPage implements OnInit {
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

id = '';

  constructor(private service: EtnService, private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.service.getData()
    .subscribe((data) => {
      this.transactions = data.transactions[this.id];
      console.log(this.transactions);
    })
  }

  getTransactionType(number: number): string {
    if (number === 1) {
        return 'Received';
    }

    if (number === 2) {
        return 'Sent';
    }

    if (number === 3) {
      return 'Top Up';
  }

    return 'Unknown';
}

getTransactionStatus(number: number): string {
  if (number === 1) {
      return 'Pending';
  }

  if (number === 2) {
      return 'Complete';
  }

  if (number === 3) {
    return 'Failed';
}
}

}
