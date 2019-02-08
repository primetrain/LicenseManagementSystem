import { Injectable, Injector } from '@angular/core';
import { RestService } from 'angular4-hal';
import { Region } from '../Resource/Region';
import { DataExchange } from './data.exchange';

@Injectable({
  providedIn: 'root'
})
export class RegionService extends RestService<Region> {
  constructor(injector: Injector) { 
    super(Region, 'regions', injector)
  }

  s = new DataExchange<Region>();

  get subject (){
    return this.s;
  }

}
