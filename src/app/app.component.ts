import { Component } from '@angular/core';
import { FmService } from './fm-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[FmService]
})
export class AppComponent {
  title = 'VPAR Test';
}
