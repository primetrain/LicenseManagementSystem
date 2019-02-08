import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LicenseManagementApplication';
  a = [1,2,3]

  increment(){
    this.a[0] += 1
  }
}

