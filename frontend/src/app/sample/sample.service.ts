import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {Greeting} from "./greeting";
import {GreetingDto} from "./greeting-dto";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http: HttpClient) {
  }

  public getGreeting(): Observable<Greeting> {
    return this.http.get<GreetingDto>(`${environment.baseUrl}/api/sample`)
      .pipe(
        map(dto => {
          return new Greeting(dto.message)
        })
      );
  }
}
