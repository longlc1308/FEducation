import { Component, OnInit } from '@angular/core';
import { LoadDataService } from 'src/app/services/load-data.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  public addCourse: FormGroup;
  public id: string;
  public course: any;

  constructor(
    public dataService: LoadDataService,
    private _formBuilder: FormBuilder,
  ) {
    this.addCourse = this._formBuilder.group({
      name: ['', [Validators.required,]],
      description: ['', [Validators.required, Validators.minLength(6)]],
      level: ['', [Validators.required]],
      videoId: ['', [Validators.required]],
    });
  }
  ngOnInit() {

  }

  onReset() {
    this.addCourse.reset()
  }

}
