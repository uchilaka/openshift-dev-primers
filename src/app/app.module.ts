import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  HashLocationStrategy,
  Location,
  LocationStrategy
} from "@angular/common";

import { AppComponent } from "./app.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { ROUTES } from "./app.routing";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { LearnOpenshiftComponent } from "./learn-openshift/learn-openshift.component";
import { SimpleSidebarComponent } from "./simple-sidebar/simple-sidebar.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SourceControlComponent } from "./source-control/source-control.component";
import { OpenshiftComponent } from "./openshift/openshift.component";
import { OtherToolsComponent } from "./other-tools/other-tools.component";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LearnOpenshiftComponent,
    SimpleSidebarComponent,
    NavbarComponent,
    SourceControlComponent,
    OpenshiftComponent,
    OtherToolsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    RouterModule.forRoot(ROUTES, { enableTracing: false })
  ],
  providers: [
    // Configure the app to use the hash location strategy
    [Location, { provide: LocationStrategy, useClass: HashLocationStrategy }]
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
