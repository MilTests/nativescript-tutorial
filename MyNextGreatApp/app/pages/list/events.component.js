"use strict";
var core_1 = require("@angular/core");
var event_service_1 = require("../../event/event.service");
var EventsComponent = (function () {
    function EventsComponent(eventService) {
        this.eventService = eventService;
    }
    EventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventService.updateEventList().subscribe(function (result) {
            console.log("ITEM");
            _this.events = result.rows;
            console.dump(_this.events);
        }, function (err) {
            console.log("Load error!!! " + err);
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImV2ZW50cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFrRDtBQUdsRCwyREFBeUQ7QUFPekQsSUFBYSxlQUFlO0lBR3hCLHlCQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUFHLENBQUM7SUFFbEQsa0NBQVEsR0FBUjtRQUFBLGlCQVdDO1FBVkcsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxTQUFTLENBQ3pDLFVBQUEsTUFBTTtZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzFCLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlCLENBQUMsRUFDRCxVQUFBLEdBQUc7WUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQWpCRCxJQWlCQztBQWpCWSxlQUFlO0lBTDNCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLDBCQUEwQjtLQUMxQyxDQUFDO3FDQUlvQyw0QkFBWTtHQUhyQyxlQUFlLENBaUIzQjtBQWpCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgRXZlbnQgfSBmcm9tIFwiLi4vLi4vZXZlbnQvZXZlbnRcIjtcbmltcG9ydCB7IEV2ZW50U2VydmljZSB9IGZyb20gXCIuLi8uLi9ldmVudC9ldmVudC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImV2ZW50c1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ldmVudHMuY29tcG9uZW50cy5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEV2ZW50c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgZXZlbnRzOiBFdmVudFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBldmVudFNlcnZpY2U6IEV2ZW50U2VydmljZSkge31cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmV2ZW50U2VydmljZS51cGRhdGVFdmVudExpc3QoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSVRFTVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50cyA9IHJlc3VsdC5yb3dzO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZHVtcCh0aGlzLmV2ZW50cyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvYWQgZXJyb3IhISEgXCIgKyBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==