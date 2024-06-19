import { Component, OnInit, Inject } from "@angular/core";

@Component({
  selector: "app-tab2",
  templateUrl: "./tab2.component.html",
  styleUrls: ["./tab2.component.css"]
})
export class Tab2Component implements OnInit {
  constructor() {
    console.log("Tab2 ctor");
  }

  ngOnInit() {}

  sendData(data: string) {}

  ngOnDestroy() {
    console.log("Tab2 destroyed");
  }
}
