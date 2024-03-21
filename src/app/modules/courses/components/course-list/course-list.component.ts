import { Component, OnInit } from '@angular/core';
import { ICourse } from 'src/app/types/Course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit{
  public courses: ICourse[] = [];

  public ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        title: 'Reprehenderit est veniam elit',
        creationDate: '13.12.2024',
        duration: 220,
        description:
          'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
      },
      {
        id: 2,
        title: 'Magna Excepteur aute Deserunt',
        creationDate: '01.02.2024',
        duration: 100,
        description:
          'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
      },
      {
        id: 3,
        title: 'Reprehenderit eiusmod nostrud amet',
        creationDate: '18.04.2023',
        duration: 300,
        description:
          'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
      },
      {
        id: 4,
        title: 'Sit voluptate eiusmod ea',
        creationDate: '23.02.2024',
        duration: 155,
        description:
          'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
      },
      {
        id: 5,
        title: 'Duis mollit reprehenderit ad',
        creationDate: '02.09.2024',
        duration: 678,
        description:
          'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
      },
    ];
  }

  public loadMore(): void {
    console.log('loadMore');
  }

  public editCourse(course: ICourse): void {
    console.log(course);
  }
}
