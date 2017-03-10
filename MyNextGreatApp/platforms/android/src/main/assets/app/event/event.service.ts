import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Event } from "./event";

const apiUrl = "http://192.168.50.6:50500/api/events";

@Injectable()
export class EventService {
    events = Array<Event>();

    constructor(private http: Http) {}

    updateEventList() {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this.http.get(apiUrl, { headers: headers }).map(res => res.json()).catch(this.handleErrors);
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }

    getEvents(): Event[] {
        return this.events;
    }
}
