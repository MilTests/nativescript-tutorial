import { Component, OnInit } from "@angular/core";

import { Event } from "../../event/event";
import { EventService } from "../../event/event.service";

@Component({
    selector: "events",
    moduleId: module.id,
    templateUrl: "./events.components.html",
})
export class EventsComponent implements OnInit {
    events: Event[];

    constructor(private eventService: EventService) {}

    ngOnInit(): void {
        this.events = this.eventService.getEvents();
    }
}
