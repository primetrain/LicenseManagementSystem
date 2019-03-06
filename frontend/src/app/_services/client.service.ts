import { Injectable,Injector } from '@angular/core';
import { RestService } from "angular4-hal";
import { Client } from "src/app/Resource/client";
import { DataExchange } from "src/app/_services/data.exchange";


@Injectable({
  providedIn: 'root'
})
export class ClientService extends RestService<Client> {
  private client = new Client();
  constructor(injector: Injector) { 
    super(Client, 'clients', injector)
  }
  s = new DataExchange<Client>();
  get subject (){
    return this.s;
  }

  //  set publish (data: Client) {
  //   this.s.next(data);
  // }
  setterClient(c:Client){
     this.client=c;
   }
  getterClient(){
    return this.client;
  }


}
