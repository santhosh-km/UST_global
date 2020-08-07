import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  isSubmitted: boolean = false;
  email = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  constructor(private authService: AuthenticateService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.email, Validators.pattern(this.email)]],
      phone: ['', Validators.required],
      company: ['', [Validators.required, Validators.minLength(6)]],
      comments: ['', '']
    });
  }

  // convenience getter for easy access to form fields
  get formControls() { return this.signupForm.controls; }

  public findInvalidControls() {
    const invalid = [];
    const controls = this.signupForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
      }
    }
    return invalid;
  }
  signup() {
    this.isSubmitted = true;
    if (!this.signupForm.valid) {
      return;
    }
    this.router.navigate(['/login']);
  }

}
