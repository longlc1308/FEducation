import { createComponent } from '@angular/compiler/src/core';
import { Routes } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursesListComponent } from './components/courses/courses-list/courses-list.component';
import { CoursesEditComponent } from './components/courses/courses-edit/courses-edit.component';
import { AddCourseComponent } from './components/courses/add-course/add-course.component';
import { ShowHomeComponent } from './components/show-home/show-home.component';
import { CoursesDetailComponent } from './components/courses/courses-detail/courses-detail.component';

export const appRoutes: Routes = [
  {
    path: 'courses',
    component: CoursesComponent,
    children: [
      { path: '', component: CoursesListComponent },
      { path: 'add', component: AddCourseComponent },
      { path: 'edit/:id', component: CoursesEditComponent },
      { path: 'detail/:slug', component: CoursesDetailComponent },

    ],
  },
  {
    path: '',
    component: ShowHomeComponent,
  },
]
