import { Injectable, Injector } from '@angular/core';
import { RestService } from 'angular4-hal';
import { User } from '../Resource/User';
import { DataExchange } from './data.exchange';

@Injectable({
  providedIn: 'root'
})
export class UserService extends RestService<User>{
  constructor(injector: Injector) { 
    super(User, 'users', injector)
  }
  s = new DataExchange<User>();
  get subject (){
    return this.s;
  }
}
