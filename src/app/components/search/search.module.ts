import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { AddCourseModule } from '../add-course/add-course.module';


@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    AddCourseModule
  ],
  exports: [SearchComponent]
})
export class SearchModule { }
