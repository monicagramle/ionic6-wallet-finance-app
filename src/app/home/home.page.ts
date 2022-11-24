import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { pay_with_etn, transactions, wallet } from '../model/model';
import { EtnService } from '../service/etn.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
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

pay_with_etn: pay_with_etn = {
  sections: {
    name: '',
    type: ''
  },
  suggestions: {
    hash: '',
    name: '',
    logo: ''
  }
};

 wallet: wallet = {
  balance: 0,
  qr_url: '',
  unlocked_balance: 0,
  wallet_address: ''
}

  features: any[] = [
    {id: 1, name: 'Pay', src: 'assets/icons/cloud-upload.svg', color: '#0000' ,page: ''},
    {id: 2, name: 'Recieve', src: 'assets/icons/cloud-download.svg', color: '#0000' , page: ''},
    {id: 3, name: 'Notifications', src: 'assets/icons/notifications-circle.svg', color: '#0000' , page: ''},
  ];

  category: any = '';
  status: any = '';
  suggestions: any = [];
  sections: any = [];


  constructor(private service: EtnService) {

   this.service.getData()
   .subscribe(data => {
        this.transactions = data.transactions;
        this.pay_with_etn = data.pay_with_etn;
        this.suggestions = this.pay_with_etn.suggestions[0];
        this.sections = this.pay_with_etn.sections;
        console.log(this.sections);
        this.wallet = data.wallet;
  });
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
