import { Injectable, Injector } from '@angular/core';
import { RestService } from 'angular4-hal';
import { Plan } from '../Resource/Plan';
import { DataExchange } from './data.exchange';

@Injectable({
  providedIn: 'root'
})
export class PlanService extends RestService<Plan>{
  constructor(injector: Injector) { 
    super(Plan, 'plans', injector)
  }

  s = new DataExchange<Plan>();

  get subject (){
    return this.s;
  }
}
