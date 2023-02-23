import { DioAccount } from "./DioAccount";

export class NewAccount extends DioAccount {
    constructor(name:string, accountnumber: number){
        super(name, accountnumber);
    }

    deposit = (value: number): void => {
        if(this.validateStatus()){
            const newValue =  value + 10;
            this.setBalance(newValue);
            console.log("Novo depósito de " + this.formatValue(newValue));
        }
    };
}