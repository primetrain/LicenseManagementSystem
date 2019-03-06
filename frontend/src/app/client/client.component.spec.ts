import{ Client } from "../Resource/client";
import{ ClientComponent } from "./client.component";
import { ClientService } from "../_services/client.service";

import { Observable } from "rxjs";
import 'rxjs/add/observable/from';


describe('ProductsComponent', () => {
  let component: ClientComponent;
  let service: ClientService;

    beforeEach(() => {
        service = new ClientService(null);
        component = new ClientComponent(service);
    });
     it('should get all the clients returned from the server', () => {

         
    // Arrange - Setup
    const client: Client[] = [
      //add json 
      {"name":"client1","username":"client1","password":"password","id":1,"_links":{"self":{"href":"http://localhost:4200/api/clients/1"},"client":{"href":"http://localhost:4200/api/clients/1"},"users":{"href":"http://localhost:4200/api/clients/1/users"}}},{"name":"client2","username":"client2","password":"password","id":2,"_links":{"self":{"href":"http://localhost:4200/api/clients/2"},"client":{"href":"http://localhost:4200/api/clients/2"},"users":{"href":"http://localhost:4200/api/clients/2/users"}}},{"name":"asd23","username":"asdfg122","password":"Prime","id":5,"_links":{"self":{"href":"http://localhost:4200/api/clients/5"},"client":{"href":"http://localhost:4200/api/clients/5"},"users":{"href":"http://localhost:4200/api/clients/5/users"}}},{"name":"asd","username":"New","password":"test","id":6,"_links":{"self":{"href":"http://localhost:4200/api/clients/6"},"client":{"href":"http://localhost:4200/api/clients/6"},"users":{"href":"http://localhost:4200/api/clients/6/users"}}}
    ];

    spyOn(service, 'getAll').and.callFake(() => {
    const client: Client[] = [
      return Observable.from([client]);
    });

    // Act - Make the actual call
    component.ngOnInit();

    // Assert - Check and report whether the test is pass or fail
    expect(component.client).toEqual(client);
  });


});

