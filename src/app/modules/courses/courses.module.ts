import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [CourseItemComponent, CourseListComponent],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule
  ],
  exports: [CourseItemComponent, CourseListComponent]
})
export class CoursesModule { }
