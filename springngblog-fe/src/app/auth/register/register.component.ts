import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
registerForm: FormGroup;
registerPayload: RegisterPayload;

constructor(private formBuilder:FormBuilder){
  this.formBuilder.group(controlConfig{
    username:'',
    email:'',
    password:''.
    confirmpassword:''
  });

  this.registerPayload={
    username:'',
    email:'',
    password: '',
    confirmpassword:''
  };
}


ngOnInit(){}

onSubmit(){
  this.registerForm.get('username').value;
  this.registerForm.get('email').value;
  this.registerForm.get('password').value;
  this.registerForm.get('confirmpassword').value;
}
}
