import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-template-forms",
  templateUrl: "./template-forms.component.html",
  styleUrls: ["./template-forms.component.css"],
})
export class TemplateFormsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  logInUser(signInForm: NgForm) {
    console.log(signInForm.value.emailAddress);
    console.log(signInForm.value.password);
    console.log(signInForm.value.terms);
    console.log(signInForm.value.city);
  }
}
