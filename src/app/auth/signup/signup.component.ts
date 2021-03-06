import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSignup(form: NgForm): void {
    const email = form.value.email;
    const password = form.value.password;
  }
}
