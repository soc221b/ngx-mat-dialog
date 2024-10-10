import { Component } from '@angular/core';
import { DialogOverviewExample } from './dialog-overview-example/dialog-overview-example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DialogOverviewExample],
  templateUrl: './app.component.html',
})
export class AppComponent {}
