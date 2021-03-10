import { Component,OnInit } from '@angular/core';
import {FormGroup,FormControl, FormBuilder,Validators,FormArray} from '@angular/forms';
import { passwordValidator } from './shared/password.validator';
import{forbiddenNameValidator} from './shared/username.validator'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactive-forms';
  registrationForm: any;

  constructor(private fb: FormBuilder){
    
  }

  get userName(){
   return this.registrationForm.get('userName') 
  } 
      
  get email(){
    return this.registrationForm.get('email') 
   } 

  get alternateEmails(){
    return this.registrationForm.get('alternateEmails') as FormArray;
   }
   
  addAlternateEmail(){
    this.alternateEmails.push(this.fb.control(''));
  }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      userName:['Faarid',[Validators.required,Validators.minLength(3),forbiddenNameValidator(/password/)]],
      password:[''],
      email:[''],
      subscribe:[false],
      confirmPassword:[''],
      address: this.fb.group({
        city:['New York  '],
        state:[''],
        postalCode:[''],
      }),
      alternateEmails:this.fb.array([])
    }, {validator:passwordValidator});

    this.registrationForm.get('subscribe').valueChanges
    .subscribe((checkedValue: any)=>{
      const email = this.registrationForm.get('email');
      if(checkedValue){
        email.setValidators(Validators.required)
      }else{
        email.clearValidators();
      }
      email.updateValueAndValidity();
    })
  }

  loadApiData(){
    //accepts the formgroup type data if setvalue else patchValue
    this.registrationForm.patchValue({
      userName:'Faarid Emad',
      password:'test',
      confirmPassword:'test',
   
    });
  }
}
