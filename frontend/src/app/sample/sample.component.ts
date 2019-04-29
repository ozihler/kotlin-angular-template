import {Component, OnInit} from '@angular/core';
import {  SampleService} from "./sample.service";
import {Greeting} from "./greeting";

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  private greeting: Greeting;

  constructor(private sampleService: SampleService) {
  }

  ngOnInit() {
    this.sampleService.getGreeting()
      .subscribe(greeting => {
        this.greeting = greeting;
      });
  }

}
