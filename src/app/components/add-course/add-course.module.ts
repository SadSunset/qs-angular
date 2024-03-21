import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCourseComponent } from './add-course.component';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [AddCourseComponent],
  imports: [
    CommonModule,
    ButtonModule,
  ],
  exports: [AddCourseComponent]
})
export class AddCourseModule { }
