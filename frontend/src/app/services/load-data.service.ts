import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoadDataService {

  private readonly SITE_URL = environment.api_url + '/courses';

  constructor(
    public httpClient: HttpClient
  ) { }

  getCourses() {
    return this.httpClient.get(this.SITE_URL)
  }
  handleError(err) {
    if (err.error instanceof Error) {
      console.log(`${err.message}`);
    } else {
      console.log(`${err.status} + ${err.error}`);
    }
  }

  getCourse(slug: string) {
    return this.httpClient.get(this.SITE_URL + '/' + slug)
  }

  getCourseId(id: string) {
    return this.httpClient.get(this.SITE_URL + '/edit/' + id)
  }

}
