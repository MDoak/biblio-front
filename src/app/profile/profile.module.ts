import { NgModule }      from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ProfileComponent } from "./profile.component";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpClientModule ],
    declarations: [ ProfileComponent],
    exports: [ ProfileComponent],
    providers: [],
    bootstrap: [ProfileComponent],
})
export class ProfileModule { }