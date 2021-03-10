import { Component,OnInit } from '@angular/core';
import {FormGroup,FormControl, FormBuilder,Validators} from '@angular/forms';
import{forbiddenNameValidator} from './shared/username.validator'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-forms';
  
  constructor(private fb: FormBuilder){
    
  }

  getUsername(){
   return this.registrationForm.get('userName')
  }
      
  registrationForm = this.fb.group({
    userName:['Faarid',[Validators.required,Validators.minLength(3),forbiddenNameValidator]],
    password:[''],
    confirmPassword:[''],
    address: this.fb.group({
      city:['New York  '],
      state:[''],
      postalCode:[''],
    })
  })

  ngOnInit(): void {
    // console.log(this.registrationForm.get('userName')?.errors?.minLength)
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
