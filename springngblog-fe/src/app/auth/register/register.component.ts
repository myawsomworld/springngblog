import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
import {RegisterPayload} from "../register-payload";
import {AuthService} from "../auth.service";
// import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
registerForm: FormGroup;
registerPayload: RegisterPayload;
// registerPayload: { password: string; confirmPassword: string; email: string; username: string };

constructor(private formBuilder:FormBuilder, private authService:AuthService){
   this.registerForm= this.formBuilder.group({
    username:'',
    email:'',
    password:'',
    confirmPassword:''
  });

  this.registerPayload = {
    username:'',
    email:'',
    password: '',
    confirmPassword:''
  };
}


ngOnInit(){

}

onSubmit(){
  this.registerPayload.username=this.registerForm.get('username')?.value;
  this.registerPayload.email= this.registerForm.get('email')?.value
  this.registerPayload.password= this.registerForm.get('password')?.value;
  this.registerPayload.confirmPassword= this.registerForm.get('confirmpassword')?.value;


  this.authService.register(this.registerPayload).Observable.subscribe({
    next: console.log("Registration successful"),
    error: console.log("Registration failed")
  })
  }


}
