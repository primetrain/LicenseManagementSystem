import { Injectable } from '@angular/core';
import { ExternalConfigurationHandlerInterface } from 'angular4-hal';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExternalService implements ExternalConfigurationHandlerInterface {
  
  constructor(private http: HttpClient) { }
  
  deserialize() {
    
  }
  serialize() {
    
  }
  getProxyUri(): string {
    return "/api/"
  }
  getRootUri(): string {
    return "/api/"
  }
  getHttp(): import("@angular/common/http").HttpClient {
    return this.http;
  }
  getExternalConfiguration(): import("angular4-hal").ExternalConfiguration {
    return null;
  }
  setExternalConfiguration(externalConfiguration: import("angular4-hal").ExternalConfiguration) {
    
  }

}
