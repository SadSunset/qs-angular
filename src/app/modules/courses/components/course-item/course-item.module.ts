import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseItemComponent } from './course-item.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [CourseItemComponent],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule
  ],
  exports: [CourseItemComponent]
})
export class CourseItemModule { }
