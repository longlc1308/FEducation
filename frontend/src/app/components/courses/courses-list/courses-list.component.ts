import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadDataService } from 'src/app/services/load-data.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit, OnDestroy {
  public courses: any = [];
  public subscription: Subscription;
  constructor(
    public myService: LoadDataService,
  ) { }

  ngOnInit(): void {
    this.loadData();
  }


  loadData(): void {
    this.subscription = this.myService.getCourses().subscribe(data => {
      this.courses = data;
      console.log(data);
    },error => {
      this.myService.handleError(error);
      }
    )
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
