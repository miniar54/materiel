import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Cours} from "../../../Models/cours";
import {CoursService} from "../../../Services/cours.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-update-cours',
  templateUrl: './update-cours.component.html',
  styleUrl: './update-cours.component.css'
})
export class UpdateCoursComponent implements OnInit{
  coursForm: FormGroup;
  coursToUpdate: Cours | undefined;
  id: number | undefined;

  constructor(
    private fb: FormBuilder,
    private coursService: CoursService,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.coursForm = this.fb.group({
      domaine: ['', Validators.required],
      description: ['', Validators.required],
      niveau: ['', Validators.required]
    });
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);
    this.coursService.getCoursById(this.id).subscribe(data => {
      this.coursToUpdate = data;
      this.coursForm.patchValue(this.coursToUpdate);
    });
  }

  onSubmit(): void {
    if (this.coursForm.valid) {
      this.coursService.updateCours(this.coursForm.value , this.id).subscribe(() => {
        this.toastr.success('Course updated successfully');
        this.router.navigate(['/user/cours/list']);
      });
    }
  }

}
