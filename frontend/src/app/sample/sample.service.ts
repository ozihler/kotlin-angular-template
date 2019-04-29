import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {Greeting} from "./greeting";
import {GreetingDto} from "./greeting-dto";


@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http: HttpClient) {
  }

  public getGreeting(): Observable<Greeting> {
    return this.http.get<GreetingDto>("http://localhost:5000/sample")
      .pipe(
        map(dto => {
          return new Greeting(dto.message)
        })
      );
  }
}
