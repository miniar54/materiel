import {Component, OnInit} from '@angular/core';
import {Materiel} from "../../../Models/Materiel";
import {MaterielService} from "../../../Services/materiel.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-materiel-list',
  templateUrl: './materiel-list.component.html',
  styleUrl: './materiel-list.component.css'
})
export class MaterielListComponent implements OnInit{
  materiels: Materiel[] = [];
  displayedColumns: string[] = ['id', 'nom', 'type', 'quantite' ,'actions'];

  constructor(private materielService: MaterielService,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.materielService.getAllMateriels().subscribe(data => {
      this.materiels = data;
    });
  }

  updateMateriel(id: number): void {
    this.router.navigate([`/user/materiel/update/${id}`]);
  }

  deleteMateriel(id: number): void {
    this.materielService.deleteMateriel(id).subscribe(() => {
      this.toastr.success('Materiel deleted successfully');
      this.materiels = this.materiels.filter(m => m.id !== id);
    });
  }

  showCours(id: number): void {
    this.router.navigate([`/user/materiel/details/${id}`]);
  }
}
