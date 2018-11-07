import { Routes } from "@angular/router";
import { LearnOpenshiftComponent } from "./learn-openshift/learn-openshift.component";
import { SourceControlComponent } from "./source-control/source-control.component";
import { OpenshiftComponent } from "./openshift/openshift.component";
import { O365Component } from "./o365/o365.component";

export const ROUTES: Routes = [
  {
    path: "docs",
    children: [
      {
        path: "o365",
        component: O365Component
      },
      {
        path: "gogs",
        component: SourceControlComponent
      },
      {
        path: "openshift",
        component: OpenshiftComponent
      },
      {
        path: "get-started",
        component: SourceControlComponent
      },
      {
        path: "learn-openshift",
        component: LearnOpenshiftComponent
      }
    ]
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/docs/gogs"
  }
];
