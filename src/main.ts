import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import {appConfig} from "./app/app.config";

bootstrapApplication(AppComponent, appConfig);