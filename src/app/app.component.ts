// core
import { Component } from '@angular/core';
// common
import { CommonModule } from '@angular/common';
// routing
import { RouterOutlet } from '@angular/router';
// component
import {HeaderComponent} from "./layouts/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfollio';
}
