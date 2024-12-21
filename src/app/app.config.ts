import { provideRouter, Routes } from "@angular/router";
import {ProfileComponent} from './profile/profile.component'
import { ApplicationConfig } from "@angular/core";
import { MainInfoComponent } from "./mainInfo.component";
import { ListComponent } from "./list/list.component";
import { SignComponent } from "./sign-in/sign-in.component";
import { BookComponent } from "./book/book.component";

const appRoutes: Routes =[
    { path: "profile", component: ProfileComponent},
    { path: "", component: MainInfoComponent},
    { path: "list", component: ListComponent},
    { path: "sign-in", component: SignComponent},
    { path: "book", component: BookComponent},
];
 
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes)]
};