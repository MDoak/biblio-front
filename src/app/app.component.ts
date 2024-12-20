import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule }   from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { ProfileService } from './profile/profile.service'      
import { Router } from "@angular/router";
import { RouterOutlet } from "@angular/router";
  
@Component({
    selector: "biblioapp",
    templateUrl: './app.component.html',
    // standalone: true,
    // imports: [FormsModule],
    styleUrls: ['./app.component.css'],
})
export class AppComponent { 
    title = "";
}
