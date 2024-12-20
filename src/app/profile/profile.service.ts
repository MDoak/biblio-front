import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})

export class ProfileService{
    host = 'http://localhost:4201';
    
    constructor(private http: HttpClient) { }
  
    private data: string[] = [ "Tom", "Bob",  "Sam"];
      
    getData(): string[] {
          
        return this.data;
    }
    addData(name: string){
          
        this.data.push(name);
    }
}