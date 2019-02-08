import { Injectable, Injector } from '@angular/core';
import { RestService } from 'angular4-hal';
import { Module } from '../Resource/Module';
import { DataExchange } from './data.exchange';

@Injectable({
  providedIn: 'root'
})
export class ModuleService extends RestService<Module>{
  constructor(injector: Injector) { 
    super(Module, 'modules', injector)
  }
  
  s = new DataExchange<Module>();
  get subject (){
    return this.s;
  }
}
