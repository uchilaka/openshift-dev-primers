import { Component, OnInit } from "@angular/core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import "bootstrap/dist/js/bootstrap.min.js";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "OpenShift (Dev) Primers";
  faBars = faBars;
  // public sidebarIsOpen: boolean;

  // toggleSidebar($event?: Event) {
  //   if ($event) {
  //     $event.preventDefault();
  //   }
  //   this.sidebarIsOpen = !this.sidebarIsOpen;
  // }
}
