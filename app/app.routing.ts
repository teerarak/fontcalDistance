import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { DistanceComponent } from "./distance/distance.component";
import { FirstpageComponent } from "./firstpage/firstpage.component";

const routes: Routes = [
    { 
        path: "", 
        redirectTo: "/first", 
        pathMatch: "full" 
    },
    { 
        path: "distance/:data", 
        component: DistanceComponent 
    },
    { 
        path: "first", 
        component: FirstpageComponent 
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }