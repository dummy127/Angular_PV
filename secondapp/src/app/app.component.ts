import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ObservableCompComponent } from './observable-comp/observable-comp.component';

import { ApiHandleComponent } from './api-handle/api-handle.component';
import { CompAComponent } from './comp-a/comp-a.component';
import { CompBComponent } from './comp-b/comp-b.component';

@Component({
  selector: 'app-root',
  imports: [ApiHandleComponent,RouterOutlet,ObservableCompComponent,CompAComponent,CompBComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'secondapp';
}
