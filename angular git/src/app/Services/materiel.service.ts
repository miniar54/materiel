import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Materiel} from "../Models/Materiel";
import {MaterialDTO} from "../Models/materialDTO";

@Injectable({
  providedIn: 'root'
})
export class MaterielService {
  baseUrl = "http://localhost:8081/materiels";
  constructor(private http:HttpClient) { }

  getAllMateriels()
  {
    return this.http.get<Materiel[]>(this.baseUrl);
  }

  addMateriel(materiel : Materiel)
  {
    return this.http.post(this.baseUrl, materiel);
  }

  updateMateriel(materiel : Materiel , id : number)
  {
    return this.http.put(this.baseUrl + "/" + id, materiel);
  }

  deleteMateriel(id : number)
  {
    return this.http.delete(this.baseUrl + "/" + id);
  }

  getMaterielById(id : number)
  {
    return this.http.get<Materiel>(this.baseUrl + "/" + id);
  }

  getMaterielByCours(id : number)
  {
    return this.http.get<Materiel[]>(this.baseUrl + "/cours/" + id);
  }

  getMaterielWithCourses(number: number) {
    return this.http.get<MaterialDTO>(this.baseUrl + "/GetMaterielWithCourses/" + number);

  }
  addMaterialToCours(coursId: number, materialId: number) {
    return this.http.put(this.baseUrl + "/" + materialId + "/addCourse/" + coursId , null);

  }
}
