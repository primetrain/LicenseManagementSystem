import { Injectable, Injector } from '@angular/core';
import { RestService } from 'angular4-hal';
import { Subscription } from '../Resource/Subscription';
import { DataExchange } from './data.exchange';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService extends RestService<Subscription> {
  constructor(injector: Injector) { 
    super(Subscription, 'subscriptions', injector)
  }

  s = new DataExchange<Subscription>();

  get subject (){
    return this.s;
  }
}
