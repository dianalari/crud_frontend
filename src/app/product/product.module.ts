import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowAllComponent, UpdateComponent, CreateComponent } from './components';
import { RouterModule } from '@angular/router';
import { ReadComponent } from './components/read/read.component';

import { MatButtonModule, MatSnackBarModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatIconModule, MatTableModule, MatMenuModule, MatCardModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ShowAllComponent,
    CreateComponent,
    UpdateComponent,
    ReadComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatMenuModule,
    MatCardModule,
  ],
  exports: [
    ShowAllComponent,
    CreateComponent,
    UpdateComponent
  ]
})
export class ProductModule { }
