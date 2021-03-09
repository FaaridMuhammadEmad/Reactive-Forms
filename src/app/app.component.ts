import { Component } from '@angular/core';
import {FormGroup,FormControl, FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-forms';

  constructor(private fb: FormBuilder){
    
  }
  registrationForm = this.fb.group({
    userName:['Faarid'],
    password:[''],
    confirmPassword:[''],
    address: this.fb.group({
      city:['New York '],
      state:[''],
      postalCode:[''],
    })
  })
  // registrationForm = new FormGroup({
  //   userName:new FormControl('Faarid'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),  
  //     postalCode: new FormControl (''),

  //   })
  // });

  loadApiData(){
    //accepts the formgroup type data if setvalue else patchValue
    this.registrationForm.patchValue({
      userName:'Faarid Emad',
      password:'test',
      confirmPassword:'test',
   
    });
  }
}
