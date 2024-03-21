import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  public value: string = "";
  public searchCourse(value: string) {
    console.log(value)
  }
}
