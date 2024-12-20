import { provideRouter, Routes } from "@angular/router";
import {ProfileComponent} from './profile/profile.component'
import { ApplicationConfig } from "@angular/core";
import { MainInfoComponent } from "./mainInfo.component";

const appRoutes: Routes =[
    { path: "profile", component: ProfileComponent},
    { path: "", component: MainInfoComponent},
];
 
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes)]
};