import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name:string = ""
  email:string = ""
  message:string = ""


  
  constructor() {}

  ngOnInit() {}


  submitForm(){
    //grabbing all the fields and their values
    const message = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
    alert(message);
  }

}
