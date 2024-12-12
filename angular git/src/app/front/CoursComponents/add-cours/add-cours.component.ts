import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CoursService} from "../../../Services/cours.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-add-cours',
  templateUrl: './add-cours.component.html',
  styleUrl: './add-cours.component.css'
})
export class AddCoursComponent implements OnInit{
  coursForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private coursService: CoursService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.coursForm = this.fb.group({
      domaine: ['', Validators.required],
      description: ['', Validators.required],
      niveau: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.coursForm.valid) {
      this.coursService.addCours(this.coursForm.value).subscribe(() => {
        this.toastr.success("Cours ajouté avec succès");
        this.router.navigate(['user/cours/list']);
      });
    }
  }

}
