import { Component } from "@angular/core";
import { FormBuilder, AbstractControl, FormControl } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(private fb: FormBuilder) {}
  title = "temp-css";
  isInvalid = false;

  form = this.fb.group({
    email: new FormControl("")
  });

  onSubmit() {
    console.log(this.form.controls.email.value);
    this.isInvalid = true;

    setTimeout(() => {
      this.isInvalid = false;
    }, 5000);
  }
}
