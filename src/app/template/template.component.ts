import { Component, OnInit } from '@angular/core';
import {User} from "../model/User";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  user:User = new User('bibi@test.fr', '1212');

  constructor() { }

  handleSubmit() {
    console.log('SUBMIT :', this.user);
  }

  ngOnInit() {

  }

}
