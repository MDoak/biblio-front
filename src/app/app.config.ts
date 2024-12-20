import { provideRouter, Routes } from "@angular/router";
import {ProfileComponent} from './profile/profile.component'
import { ApplicationConfig } from "@angular/core";

const appRoutes: Routes =[
    { path: "profile", component: ProfileComponent}
];
 
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes)]
};