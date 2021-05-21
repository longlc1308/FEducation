import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadDataService } from 'src/app/services/load-data.service';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.scss']
})
export class CoursesDetailComponent implements OnInit {
  public slug: string;
  public course: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    public dataService: LoadDataService,
  ) { }

  ngOnInit(): void {
    this.slug = this.activatedRoute.snapshot.params['slug'];
    this.loadData();
  }

  loadData(): void {
    this.dataService.getCourse(this.slug).subscribe(data => {
      this.course = data;
    },error => {
      this.dataService.handleError(error);
      })
  }



}
