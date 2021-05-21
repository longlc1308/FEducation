import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadDataService } from 'src/app/services/load-data.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-courses-edit',
  templateUrl: './courses-edit.component.html',
  styleUrls: ['./courses-edit.component.scss']
})
export class CoursesEditComponent implements OnInit {

  public frmCourse: FormGroup;
  public id: string;
  public course: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    public dataService: LoadDataService,
    private _formBuilder: FormBuilder,
  ) {
    this.frmCourse = this._formBuilder.group({
      name: ['', [Validators.required,]],
      description: ['', [Validators.required, Validators.minLength(6)]],
      level: ['', [Validators.required]],
      videoId: ['', [Validators.required]],
    });
   }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.loadData();
  }

  loadData(): void {
      this.dataService.getCourseId(this.id).subscribe(data => {
        this.frmCourse.patchValue({
          name: data["name"],
          description: data["description"],
          level: data["level"],
          videoId: data["videoId"],
        })
      }, error => {
      this.dataService.handleError(error);
    })
  }


}
