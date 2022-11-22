 export class data {
  pay_with_etn: pay_with_etn
  transactions: transactions
  wallet: wallet
 }

 export class pay_with_etn {
    sections: {
      name: string,
      type: string
    }
    suggestions: {
      hash: string,
      name: string,
      logo: string
    }
  };

 export class transactions {
    dateCreated: string
    destinationAmount: number
    destinationWallet: string
    fee: number
    id: string
    paymentId: string
    paymentType: number
    sourceWalletAddress: string
    status: number
    topUpInfo : {
      etn: number
      instructions: string
      logo: string
      mobileNumber: string
      operatorName: string
      package: string
  }
  txHash: string
  txKey: string
}

export class wallet {
   balance: number
   qr_url: string
   unlocked_balance: number
   wallet_address: string
}
