import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { EventsComponent } from "./pages/list/events.component";

const routes: Routes = [
    { path: "", redirectTo: "/events", pathMatch: "full" },
    { path: "events", component: EventsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }