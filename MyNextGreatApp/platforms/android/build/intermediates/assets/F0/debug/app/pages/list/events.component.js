"use strict";
var core_1 = require("@angular/core");
var event_service_1 = require("../../event/event.service");
var EventsComponent = (function () {
    function EventsComponent(eventService) {
        this.eventService = eventService;
    }
    EventsComponent.prototype.ngOnInit = function () {
        this.events = this.eventService.getEvents();
    };
    return EventsComponent;
}());
EventsComponent = __decorate([
    core_1.Component({
        selector: "events",
        moduleId: module.id,
        templateUrl: "./events.components.html",
    }),
    __metadata("design:paramtypes", [event_service_1.EventService])
], EventsComponent);
exports.EventsComponent = EventsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImV2ZW50cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFrRDtBQUdsRCwyREFBeUQ7QUFPekQsSUFBYSxlQUFlO0lBR3hCLHlCQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUFHLENBQUM7SUFFbEQsa0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQztBQVJZLGVBQWU7SUFMM0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsMEJBQTBCO0tBQzFDLENBQUM7cUNBSW9DLDRCQUFZO0dBSHJDLGVBQWUsQ0FRM0I7QUFSWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgRXZlbnQgfSBmcm9tIFwiLi4vLi4vZXZlbnQvZXZlbnRcIjtcbmltcG9ydCB7IEV2ZW50U2VydmljZSB9IGZyb20gXCIuLi8uLi9ldmVudC9ldmVudC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImV2ZW50c1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ldmVudHMuY29tcG9uZW50cy5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEV2ZW50c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgZXZlbnRzOiBFdmVudFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBldmVudFNlcnZpY2U6IEV2ZW50U2VydmljZSkge31cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmV2ZW50cyA9IHRoaXMuZXZlbnRTZXJ2aWNlLmdldEV2ZW50cygpO1xuICAgIH1cbn1cbiJdfQ==