import { inject, Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root', //it will be shared with all the components remove it if don't want to share
})
export class UserService {
  LogS: LoggerService = inject(LoggerService);
  myName: string = 'Aradhya Ambole';
  users: any[] = [
    { id: 1, location: 'Mumbai' },
    { id: 2, location: 'Pune' },
    { id: 3, location: 'Surat' },
  ];
  getUsers() {
    this.LogS.message(`${this.users.length} users fetched`,this.users)
    return this.users;
  }

  constructor() {}
  // ngOnInit() { }
}
