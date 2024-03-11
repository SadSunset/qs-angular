import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    CoreModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
