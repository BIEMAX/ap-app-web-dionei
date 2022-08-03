import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { SchoolComponent } from './school/school.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutMeComponent
  },
  {
    path: 'school',
    component: SchoolComponent
  },
  {
    path: 'curriculum',
    component: CurriculumComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }