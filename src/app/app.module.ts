import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from './app.component';
import { ProfileModule } from './profile/profile.module'
import { ProfileService } from "./profile/profile.service";
import { ProfileComponent } from "./profile/profile.component";
import { RouterLink, RouterOutlet } from "@angular/router";
import { MainInfoComponent } from "./mainInfo.component";


@NgModule({
    declarations: [AppComponent, MainInfoComponent],
    imports: [BrowserModule, FormsModule, HttpClientModule, ProfileModule, RouterOutlet, RouterLink],
    providers: [ProfileComponent],
    bootstrap: [AppComponent, ProfileComponent],
  })
  export class AppModule { }