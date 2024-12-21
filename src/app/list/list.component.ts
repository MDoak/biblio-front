import { HttpClientModule } from "@angular/common/http";
import { Component} from "@angular/core";
  
@Component({
    selector: "listbooks-app",
    templateUrl: './list.component.html',
    styleUrls: ['../app.component.css', './list.component.css'],
})
export class ListComponent {
    openBookPage() {
        alert('Вы нажали на кнопку!');
    }
 }