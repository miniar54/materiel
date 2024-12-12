import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MaterielService} from "../../../Services/materiel.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-add-materiel',
  templateUrl: './add-materiel.component.html',
  styleUrl: './add-materiel.component.css'
})
export class AddMaterielComponent implements OnInit{
  materielForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private materielService: MaterielService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.materielForm = this.fb.group({
      nom: ['', Validators.required],
      type: ['', Validators.required],
      quantite: ['', [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit(): void {
    if (this.materielForm.valid) {
      this.materielService.addMateriel(this.materielForm.value).subscribe(() => {
        this.toastr.success("Materiel ajouté avec succès");
        this.router.navigate(['user/materiel/list']);
      });
    }
  }

}
