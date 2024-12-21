import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PopupService } from "../popup.service";

@Injectable({
    providedIn: 'root',
})

export class ProfileService{
    host = 'http://localhost:4201';
    
    constructor(
        private http: HttpClient,
        private popupService: PopupService    
    ) { }

  
    private data: string[] = [ "Tom", "Bob",  "Sam"];
      
    getData(): string[] {
          
        return this.data;
    }
    addData(name: string){
          
        this.data.push(name);
    }
}