import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ObservableCompComponent } from './observable-comp/observable-comp.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ObservableCompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'secondapp';
}
