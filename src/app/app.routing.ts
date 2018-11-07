import { Routes } from "@angular/router";
import { GettingStartedComponent } from "./getting-started";
import { LearnOpenshiftComponent } from "./learn-openshift/learn-openshift.component";

export const ROUTES: Routes = [
  {
    path: "docs",
    children: [
      {
        path: "getting-started",
        component: GettingStartedComponent
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
    redirectTo: "/docs/getting-started"
  }
];
