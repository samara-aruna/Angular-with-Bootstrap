import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {ContantComponent} from './contant/contant.component';

const routes: Routes = 
[
  {path : '', component:HomeComponent},
  {path:'About',component:AboutComponent},
  {path:'Contant',component:ContantComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
