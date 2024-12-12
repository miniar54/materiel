import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar-front',
  templateUrl: './nav-bar-front.component.html',
  styleUrl: './nav-bar-front.component.css'
})
export class NavBarFrontComponent implements OnInit{

  constructor(private router: Router, private route: ActivatedRoute ) {}


  ngOnInit(): void {
  }
}
