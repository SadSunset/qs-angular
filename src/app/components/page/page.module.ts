import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { CoreModule } from 'src/app/modules/core/core.module';
import { CoursesModule } from 'src/app/modules/courses/courses.module';

@NgModule({
  declarations: [PageComponent],
  imports: [CommonModule, CoreModule, CoursesModule, CoreModule],
  exports: [PageComponent],
})
export class PageModule {}
