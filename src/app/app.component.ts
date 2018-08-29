import {Component, OnInit} from '@angular/core';
import {FetchService} from './services/fetch.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';
    constructor(private fetch: FetchService){

    }
    ngOnInit() {
      this.fetch.getJSON().subscribe(data => {
          console.log(data);
      }, error => console.log(error));
      console.log('tt');
    }
}
