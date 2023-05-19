import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
import {RegisterPayload} from "../register-payload";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
// import {error} from "@angular/compiler-cli/src/transformers/util";
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

constructor(private formBuilder:FormBuilder, private authService:AuthService, private router: Router){
   this.registerForm= new FormGroup({
    username:new FormControl(),
    email:new FormControl(),
    password:new FormControl(),
    confirmPassword:new FormControl()
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


  this.authService.register(this.registerPayload).subscribe( () => {
    next: console.log("Registration successful"); this.router.navigateByUrl('/register-success');
    // error("Registration failed")
  })
  }


}
