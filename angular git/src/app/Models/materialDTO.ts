import {Cours} from "./cours";

export interface MaterialDTO
{
  id : number ;
  nom : string ;
  type : string ;
  quantite : number ;
  courses : Cours[];
}
