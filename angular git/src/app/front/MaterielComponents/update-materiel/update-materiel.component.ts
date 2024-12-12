import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MaterielService} from "../../../Services/materiel.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {Materiel} from "../../../Models/Materiel";

@Component({
  selector: 'app-update-materiel',
  templateUrl: './update-materiel.component.html',
  styleUrl: './update-materiel.component.css'
})
export class UpdateMaterielComponent implements OnInit{
  materielForm: FormGroup;
  mateialtoUpdate: Materiel | undefined;
  id: number | undefined;

  constructor(
    private fb: FormBuilder,
    private materielService: MaterielService,
    private router: Router,
    private toastr: ToastrService,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.materielForm = this.fb.group({
      nom: ['', Validators.required],
      type: ['', Validators.required],
      quantite: ['', [Validators.required, Validators.min(1)]]
    });
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);
    this.materielService.getMaterielById(this.id).subscribe(data => {
      this.mateialtoUpdate = data;
      this.materielForm.patchValue(this.mateialtoUpdate);
    })

  }

  onSubmit(): void {
    if (this.materielForm.valid) {
      this.materielService.updateMateriel(this.materielForm.value, this.id).subscribe(() => {
        this.toastr.success("Materiel modifié avec succès");
        this.router.navigate(['user/materiel/list']);
      });
    }
  }
}
