import { Component } from "@angular/core";
import { timer } from "rxjs";
import { Scheduler } from "bryntum-scheduler";
import * as staticData from "./staticData/staticData.json";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "bryntum";
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    let scheduler = new Scheduler({
      adopt: "bryntum",
      rowHeight: 90,
      barMargin: 3,
      resourceMargin: 25,
      features: {
        stripe: true,
        eventDragCreate: false,
        pan: true,
        dependencies: true,
        pdfExport: {
          exportServer: "http://localhost:8080" // Required
        },
        timeRanges: true,
        eventDrag: {
          constrainDragToResource: true
        },
        eventEdit: {
          showDeleteButton: false
        },
        eventContextMenu: {
          items: {
            deleteEvent: false,
            addEvent: false
          }
        }
      },

      // eventLayout: 'none',
      milestoneLayoutMode: "default",

      // Width per char in px when using 'estimate'
      milestoneCharWidth: 10,

      // How to aligned milestones in relation to their (start)date
      columns: [
        {
          text: "Centro",
          type: "resourceInfo",
          field: "name",
          width: 250,
          filterable: true,
          showRole: true,
          showEventCount: false,
          showImage: false
        }
      ],
      resources: staticData.cargasCentroResources,
      events: staticData.cargasCentroEventsModel,

      /*startDate: schedulerFromBack.inicio,
      endDate: schedulerFromBack.fin,*/
      viewPreset: "dayAndWeek"
    });
    scheduler.zoomToFit();
  }
}
