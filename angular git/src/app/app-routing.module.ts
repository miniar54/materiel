import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FrontHomeComponent} from "./front/front-home/front-home.component";
import {NavBarFrontComponent} from "./front/nav-bar-front/nav-bar-front.component";
import {CoursListComponent} from "./front/CoursComponents/cours-list/cours-list.component";
import {AddCoursComponent} from "./front/CoursComponents/add-cours/add-cours.component";
import {UpdateCoursComponent} from "./front/CoursComponents/update-cours/update-cours.component";
import {MaterielListComponent} from "./front/MaterielComponents/materiel-list/materiel-list.component";
import {AddMaterielComponent} from "./front/MaterielComponents/add-materiel/add-materiel.component";
import {UpdateMaterielComponent} from "./front/MaterielComponents/update-materiel/update-materiel.component";
import {MaterialDetailsComponent} from "./front/MaterielComponents/material-details/material-details.component";

const routes: Routes = [


  {path: '', redirectTo: 'user', pathMatch: 'full'},
  {
    path: 'user',
    component: NavBarFrontComponent,
    children:
      [
        {path: '', component: FrontHomeComponent},
        {path: 'cours/list', component: CoursListComponent},
        {path: 'cours/add', component: AddCoursComponent},
        {path: 'cours/update/:id', component: UpdateCoursComponent},
        {path: 'materiel/list', component: MaterielListComponent},
        {path: 'materiel/add', component: AddMaterielComponent},
        {path: 'materiel/update/:id', component: UpdateMaterielComponent},
        {path: 'materiel/details/:id', component: MaterialDetailsComponent}


      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
