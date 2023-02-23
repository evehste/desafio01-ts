export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  getStatus = (): boolean => {
    return this.status;
  }

  getBalance = (): number => {
    return this.balance;
  }

  setBalance = (value: number): void => {
    this.balance = value;
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance = this.balance + value;
      console.log('Você depositou: '+ this.formatValue(value));
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus() && value < this.balance){
      this.balance = this.balance - value;
      console.log('Você sacou: '+ this.formatValue(value));
    }
  }



  formatValue = (value:number): string => {
    return "R$" + value.toFixed(2);
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida');
  }
}
