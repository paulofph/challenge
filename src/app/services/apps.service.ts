import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { map } from 'rxjs/operators'
import { App } from "../models/app.model";

@Injectable()
export class AppsService {

  constructor(
    private http: HttpClient
  ) { }

  public getApps(): Observable<any> {
    const filePath = './../assets/apps.json';
    return this.http.get(filePath)
  }

}
