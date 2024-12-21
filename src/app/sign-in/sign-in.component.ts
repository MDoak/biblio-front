import { Component} from "@angular/core";
import { FormsModule, NgForm} from "@angular/forms";
 
class User{
    constructor(
        public name: string,
        public email: string,
        public phone: string,
        public login: string,
        public password: string,

    ){}
}
  
@Component({
    selector: "sign-in",
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css'],
})
export class SignComponent {
    name: string = "";
    email: string = "";
    phone: string = "";
    login: string = "";
    password: string = "";
      
    onSubmit(form: NgForm){
        console.log(form);
    }
}