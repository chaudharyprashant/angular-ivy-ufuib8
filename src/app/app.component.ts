import { Component, VERSION } from '@angular/core';
import * as data from './data.json';

interface Candidate {
  id: Number;
  first_name: String;
  last_name: String;
  email: String;
  gender: String;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  candidates: Candidate[] = (data as any).default;
  //candidates: Candidate[] = data;
  ngOnInit() {
    console.log(this.candidates);
  }
}
