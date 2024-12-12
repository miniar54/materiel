import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MaterielService} from "../../../Services/materiel.service";
import {MaterialDTO} from "../../../Models/materialDTO";

@Component({
  selector: 'app-material-details',
  templateUrl: './material-details.component.html',
  styleUrl: './material-details.component.css'
})
export class MaterialDetailsComponent implements OnInit{
  material: MaterialDTO | undefined;
  constructor(
    private route: ActivatedRoute,
    private materielService: MaterielService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.materielService.getMaterielWithCourses(+id).subscribe(data => {
        console.log(data);
        this.material = data;
      });
    }
  }
}
