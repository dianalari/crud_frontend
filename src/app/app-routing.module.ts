import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent, ShowAllComponent, ReadComponent, UpdateComponent } from './product/components';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'create', component: CreateComponent },
  { path: 'read/:id', component: ReadComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'dashboard', component: ShowAllComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
