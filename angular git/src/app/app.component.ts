import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Internships';
  constructor() {
  console.log("creating app component");
  }

  ngOnInit() {
   // this.us.redirectAfterLogin();
  }



}
