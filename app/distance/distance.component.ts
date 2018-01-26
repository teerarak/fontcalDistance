import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Http } from "@angular/http";
import { DistanceService } from "./distance.service";
import { LoadingIndicator } from 'nativescript-loading-indicator';

@Component({
    moduleId: module.id,
    selector: "distance",
    templateUrl: "distance.component.html",
})

export class DistanceComponent implements OnInit {
    data :any;
    distance = "0";
    loader = new LoadingIndicator();
    options = {
        message: 'Loading...',
        progress: 0.65,
        android: {
            indeterminate: true,
            cancelable: false,
            cancelListener: function(dialog) { console.log("Loading cancelled") },
            max: 100,
            progressNumberFormat: "%1d/%2d",
            progressPercentFormat: 0.53,
            progressStyle: 1,
            secondaryProgress: 1
        },
        ios: {
            details: "Additional detail note!",
            margin: 10,
            dimBackground: true,
            backgroundColor: "yellow",
            hideBezel: true
        }
    };
    constructor(
        private http: Http,
        private route: ActivatedRoute,
        private router: Router,
        private distanceService: DistanceService
    ) { }
    ngOnInit(): void {
        this.loader.show(this.options);
        this.data = JSON.parse(this.route.snapshot.params["data"]);
        console.log(this.data.firstAmphur)
        this.distanceFunc();
    }
    distanceFunc (){
        this.distanceService.calDistance(this.data)
        .subscribe(
            (Response) => {
                // console.log(JSON.stringify(Response));
                this.distance = this.setNumberFormat(Response / 1000);
                this.loader.hide();
            },
            (error) => {
                // error
                this.loader.hide();
                alert("calDistance Error");
            }
            
        );
    }
    setNumberFormat (amount) {
        var parts=amount.toString().split(".");
        return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." +   parts[1].substr(0,2) : ".00");
    }
}
