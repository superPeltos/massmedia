import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FetchService {

    constructor(private http: HttpClient) {
        let obj;
        this.getJSON().subscribe(data => obj = data, error => console.log(error));
    }

    public getJSON(): Observable<any> {
        return this.http.get('./assets/media_relation.json');


    }

}
