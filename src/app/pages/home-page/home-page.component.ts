import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

  ngOnInit() {
    window.scroll(0,1 )
  }
}
