import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChocolateDetailComponent } from './chocolate-detail/chocolate-detail.component';
import { ChocolateListComponent } from './chocolate-list/chocolate-list.component';

const routes: Routes = [
  {path:'',redirectTo:'list', pathMatch: 'full' },
  {path :'list' , component : ChocolateListComponent},
  {path :'details/:id' , component : ChocolateDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const ArrayOfComponents = [ChocolateDetailComponent, ChocolateListComponent]
