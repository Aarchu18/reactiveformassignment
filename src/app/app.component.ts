import { Component } from '@angular/core';
import { AppserviceService } from './appservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'FormReactive';

  constructor( private routes: Router) {

  }

}

