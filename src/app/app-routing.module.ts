import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CutomersComponent } from './cutomers/cutomers.component';


const routes: Routes = [
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
