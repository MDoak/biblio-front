import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule }   from "@angular/forms";
import { Title } from "@angular/platform-browser";      
import { Router } from "@angular/router";
import { RouterOutlet } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
// import { MdDialog } from '@angular/material';
  

@Component({
    selector: "biblioapp",
    templateUrl: './app.component.html',
    // standalone: false,
    // imports: [RouterOutlet],
    styleUrls: ['./app.component.css'],
})
export class AppComponent { 
    title = "";
    // constructor(public dialog: MdDialog) {

    // }
}
