import { Component, OnInit } from '@angular/core';
import { ClientService } from "src/app/_services/client.service";
import { Client } from "src/app/Resource/client";
import {TableModule} from 'primeng/table';



@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})

export class ClientComponent implements OnInit {
    currentAction: string;
    checkActive: string = "Inactive";
    createTrue: boolean = false;
    getClient: Client[];
    client: Client;
      constructor(private clientService: ClientService) { }
    ngOnInit(){
        this.clientService.getAll().subscribe((client: Client[]) => {
             this.getClient = client;
             console.log("Clients"+JSON.stringify(this.getClient));
        })       
    }
    selectClient(entry){
        this.checkActive = "Active";
        this.client = entry;
    }
    createClient(){
        this.createTrue = true;
        this.currentAction = "Create";
        this.client = this.clientService.getterClient();
    
    }
    update(){
        if(this.checkActive == "Active"){
            this.currentAction = "Update";
            this.createTrue = true;
        }
        else{
            alert("Please select a client to update.");
        }
    }
    save(){
        if(this.currentAction == "Create"){        
            this.clientService.create(this.client).subscribe((client: Client) => {
                console.log("Clients"+JSON.stringify(this.client));
            })
        }
        if(this.currentAction == "Update"){
            this.clientService.update(this.client).subscribe((client: Client) => {
                console.log("Clients"+JSON.stringify(this.client));
                })
        }
    }
    delete(){
        if(this.checkActive == "Active"){
            this.clientService.delete(this.client).subscribe((client: Client) => {
                 console.log("Clients"+JSON.stringify(this.client));
            })
        }
        else{
            alert("Please select a client to delete.");
        }
    }
}