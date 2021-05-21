import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadDataService } from 'src/app/services/load-data.service';
@Component({
  selector: 'app-show-home',
  templateUrl: './show-home.component.html',
  styleUrls: ['./show-home.component.scss']
})
export class ShowHomeComponent implements OnInit,OnDestroy {
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
