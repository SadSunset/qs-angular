import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICourse } from 'src/app/types/Course';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent {
  @Input() public course: ICourse = {} as ICourse;
  @Output() public edit: EventEmitter<ICourse> = new EventEmitter<ICourse>();
  @Output() public delete: EventEmitter<any> = new EventEmitter<any>()

  public editCourse(): void {
    //this.edit.emit(this.course);
    console.log("success edit")
  }
  public rounded: boolean = true;

  public deleteCourse(): void {
    console.log("success delete")
  }
}
