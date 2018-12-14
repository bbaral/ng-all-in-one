import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Test Account',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  addAccount(nameValue: string, statusValue: string) {
    this.accounts.push({name: nameValue, status: statusValue});
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
  }
}
