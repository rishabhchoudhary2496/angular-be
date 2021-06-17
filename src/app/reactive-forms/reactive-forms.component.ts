import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-reactive-forms",
  templateUrl: "./reactive-forms.component.html",
  styleUrls: ["./reactive-forms.component.css"],
})
export class ReactiveFormsComponent implements OnInit {
  checkoutForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.checkoutForm = formBuilder.group({
      //buidling the form using form builder
      emailAddress: ["", [Validators.required, Validators.email]],
      quantity: ["", [Validators.required, Validators.minLength(8)]],
      terms: ["", Validators.requiredTrue],
    });
  }

  postData() {
    console.log(this.checkoutForm.value.emailAddress);
  }

  ngOnInit(): void {}
}
