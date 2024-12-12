import {Component, OnInit} from '@angular/core';
import {CoursService} from "../../../Services/cours.service";
import {Cours} from "../../../Models/cours";
import {MaterielService} from "../../../Services/materiel.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {Materiel} from "../../../Models/Materiel";

@Component({
  selector: 'app-cours-list',
  templateUrl: './cours-list.component.html',
  styleUrl: './cours-list.component.css'
})
export class CoursListComponent implements OnInit{
  cours : Cours[] = [];
  materials: Materiel[] = [];
  displayedColumns: string[] = ['id', 'domaine', 'description', 'niveau' , 'actions'];

  constructor(private coursService: CoursService,
              private materielService: MaterielService,
              private router: Router,
              private toastr: ToastrService
  )
               { }

  ngOnInit(): void {
    this.loadCours();
    this.loadMaterials();
  }

  loadCours()
  {
    this.coursService.getAllCours().subscribe(data => {
      this.cours = data;
    });
  }
  loadMaterials(): void {
    this.materielService.getAllMateriels().subscribe(data => {
      this.materials = data;
    });
  }

  updateCours(id: number): void {
    this.router.navigate([`/user/cours/update/${id}`]);
  }

  deleteCours(id: number): void {
    this.coursService.deleteCours(id).subscribe(() => {
      this.toastr.success('Cours deleted successfully');
      this.cours = this.cours.filter(c => c.id !== id);
    });
  }

  addMaterial(coursId: number, materialId: number): void {
    this.materielService.addMaterialToCours(coursId, materialId).subscribe(() => {
      this.toastr.success('Material added to course successfully');
    });
  }

}
