import { Component } from '@angular/core';
import { MyService } from './my-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(private myService: MyService) { }

  onButton1Click() {
    this.myService.function1().subscribe(response => {
      console.log(response);
    });
  }

  onButton2Click() {
    this.myService.function2().subscribe(response => {
      console.log(response);
    });
  }
}
