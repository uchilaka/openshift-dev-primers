import { Component, OnInit, Input } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  @Input()
  isOpen: boolean;

  constructor() {}

  ngOnInit() {
    // $("#menu-toggle").click(function(e) {
    //   e.preventDefault();
    //   $("#wrapper").toggleClass("toggled");
    // });
  }
}
