import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {isPrefixNartawakValidator} from "../validators";
import {User} from "../model/User";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  emailCtrl: FormControl;
  passwordCtrl: FormControl;
  userForm: FormGroup;

  user: User = new User('Nartawak', 'test');

  constructor(fb: FormBuilder) {

  // Création des contrôles
    this.emailCtrl = fb.control('', [Validators.email, Validators.required]);
    this.passwordCtrl = fb.control('', [isPrefixNartawakValidator]);

    // Création du groupe (aka le formulaire)
    this.userForm = fb.group({

      email: this.emailCtrl,
      password: this.passwordCtrl
    });
  }

  handleClear() {

    this.emailCtrl.setValue('');
    this.passwordCtrl.setValue('');
  }

  handleSubmit() {
    console.log(this.userForm.value);
  }

  ngOnInit() {
  }
}


