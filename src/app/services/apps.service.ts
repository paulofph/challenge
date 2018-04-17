import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { map } from 'rxjs/operators'

@Injectable()
export class AppsService {

  constructor(
    private http: HttpClient
  ) { }

  public getApps(): Observable<any> {
    const filePath = './../assets/apps.json';
    return this.http.get(filePath)
                    .pipe(
                      map((x:any) => x as any)
                    )
  }

}
