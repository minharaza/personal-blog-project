import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name = " "
  email = " "
  message = " "

  
  constructor() { }

  ngOnInit() {}


  submitForm(){
    //grabbing all the fields and their values
    const message = "my name is this.name"
    alert(message);
  }

}
