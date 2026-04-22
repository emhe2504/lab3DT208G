import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Mainheader } from './pages/mainheader/mainheader';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Mainheader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lab3DT208G');
}
