import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Headers, Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from "rxjs/Rx";

@Injectable()
export class DistanceService {
    constructor(
        private http: Http,
        private router: Router
    ) { }
    calDistance(model: any): Observable<any> {
        let apiUrl = "http://192.168.43.166:3000/api";
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this.http.post(
            apiUrl, 
            model,
            { headers: headers}
        )
        .map(response => response.json())
        .catch(this.handleErrors);
    }

      //function other
    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}