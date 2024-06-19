import { Component, OnInit, Inject } from "@angular/core";

@Component({
  selector: "app-tab1",
  templateUrl: "./tab1.component.html",
  styleUrls: ["./tab1.component.css"]
})
export class Tab1Component implements OnInit {
  constructor() {
    console.log("Tab1 ctor");
  }

  ngOnInit() {}

  ngOnDestroy() {
    console.log("Tab1 destroyed");
  }
}
