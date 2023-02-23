import { CompanyAccount } from './class/CompanyAccount'
import { NewAccount } from './class/NewAccount';
import { PeopleAccount } from './class/PeopleAccount'

console.log(" --------------- Descrição de conta --------------- ");
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Eveh', 10)
console.log(peopleAccount);
console.log(" --------------- Depósito --------------- ");
peopleAccount.deposit(150);
console.log(" --------------- Saque --------------- ");
peopleAccount.withdraw(12);
peopleAccount.getBalance();//valor final

console.log(" -------------------------------------------- ");
console.log(" --------------- Conta Company --------------- ");
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount);

console.log(" --------------- Empréstimo --------------- ");
companyAccount.getLoan(100);

console.log(" -------------------------------------------- ");
console.log(" --------------- Conta NewAccount --------------- ");
const newAccount: NewAccount = new NewAccount('João', 50)
console.log(newAccount);
console.log(" --------------- Depósito --------------- ");
newAccount.deposit(100);
