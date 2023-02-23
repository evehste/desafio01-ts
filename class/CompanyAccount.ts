import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber);
  }

  getLoan = (value: number): void => {
    if(this.validateStatus()){
      const newBalance = this.getBalance() + value;
      this.setBalance(newBalance);
      console.log('Voce pegou um empréstimo de '+ this.formatValue(value));
    }
  }
}
