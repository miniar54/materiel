import { NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontHomeComponent } from './front/front-home/front-home.component';
import {MatIconModule} from '@angular/material/icon';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {MatSelectModule} from "@angular/material/select";
import {KeycloakAngularModule} from "keycloak-angular";
import {ToastrModule} from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarFrontComponent } from './front/nav-bar-front/nav-bar-front.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {MatButton, MatButtonModule} from "@angular/material/button";
import { environment } from '../environments/environment';
import { CoursListComponent } from './front/CoursComponents/cours-list/cours-list.component';
import { AddCoursComponent } from './front/CoursComponents/add-cours/add-cours.component';
import { UpdateCoursComponent } from './front/CoursComponents/update-cours/update-cours.component';
import { MaterielListComponent } from './front/MaterielComponents/materiel-list/materiel-list.component';
import { AddMaterielComponent } from './front/MaterielComponents/add-materiel/add-materiel.component';
import { UpdateMaterielComponent } from './front/MaterielComponents/update-materiel/update-materiel.component';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatRow, MatRowDef,
  MatTable, MatTableModule
} from "@angular/material/table";
import { MaterialDetailsComponent } from './front/MaterielComponents/material-details/material-details.component';
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatList, MatListItem} from "@angular/material/list";
import {MatLine} from "@angular/material/core";

console.log('Environment Variables:', environment);


@NgModule({
  declarations: [
    AppComponent,
    FrontHomeComponent,
    NavBarFrontComponent,
    CoursListComponent,
    AddCoursComponent,
    UpdateCoursComponent,
    MaterielListComponent,
    AddMaterielComponent,
    UpdateMaterielComponent,
    MaterialDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatFormField,
    MatOption,
    MatSelect,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatFormField,
    MatOption,
    MatSelect,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormField,
    KeycloakAngularModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    BrowserModule,
    NgxChartsModule,
    ToastrModule.forRoot({ // Configure Toastr globally
      timeOut: 3000, // Set default timeout for notifications in milliseconds
      positionClass: 'toast-top-right', // Set default position
      preventDuplicates: true, // Prevent duplicate notifications
      progressBar: true // Display a progress bar
    }),
    BrowserAnimationsModule,
    MatButton,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatCellDef,
    MatHeaderCellDef,
    MatRowDef,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatList,
    MatListItem,
    MatLine

  ],
  providers: [
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
