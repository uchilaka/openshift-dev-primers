import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-simple-sidebar",
  templateUrl: "./simple-sidebar.component.html",
  styleUrls: ["./simple-sidebar.component.css"]
})
export class SimpleSidebarComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }
}
