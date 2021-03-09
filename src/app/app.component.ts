import { Component,OnInit } from '@angular/core';
import {FormGroup,FormControl, FormBuilder,Validators} from '@angular/forms'
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
    userName:['Faarid',Validators.required],
    password:[''],
    confirmPassword:[''],
    address: this.fb.group({
      city:['New York  '],
      state:[''],
      postalCode:[''],
    })
  })
  ngOnInit(): void {
  //  console.log(this.registrationForm.get('userName')?.invalid)
    }

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
