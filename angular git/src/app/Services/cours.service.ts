import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cours} from "../Models/cours";

@Injectable({
  providedIn: 'root'
})
export class CoursService {
  baseUrl = "http://localhost:8081/api/cours";
  constructor(private http : HttpClient) { }

  getAllCours()
  {
    return this.http.get<Cours[]>(this.baseUrl);
  }

  addCours(cours : Cours)
  {
    return this.http.post<Cours>(this.baseUrl, cours);
  }

  updateCours(cours : Cours , id : number)
  {
    return this.http.put(this.baseUrl + '/' + id, cours);
  }

  deleteCours(id : number)
  {
    return this.http.delete(this.baseUrl + "/" + id);
  }

  getCoursById(id : number)
  {
    return this.http.get<Cours>(this.baseUrl + "/" + id);
  }



}
