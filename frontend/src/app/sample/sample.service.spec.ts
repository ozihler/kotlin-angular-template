import {TestBed} from '@angular/core/testing';

import {SampleService} from './sample.service';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {routes} from "../routes";
import {SampleComponent} from "./sample.component";
import {RouterTestingModule} from "@angular/router/testing";

describe('SampleService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
      RouterTestingModule
       ],
    providers: [ ],
    declarations: [SampleComponent]
  }));

  it('should be created', () => {
    const service: SampleService = TestBed.get(SampleService);
    expect(service).toBeTruthy();
  });
});
