import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { PageModule } from './components/page/page.module';
import { BreadcrumbsModule } from './components/breadcrumbs/breadcrumbs.module';
import { SearchModule } from './components/search/search.module';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AddCourseModule } from './components/add-course/add-course.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, PageModule, BreadcrumbsModule, SearchModule, AddCourseModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
