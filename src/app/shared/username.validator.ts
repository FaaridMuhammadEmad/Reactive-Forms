import { AbstractControl, ValidatorFn } from "@angular/forms";

export function forbiddenNameValidator(control: AbstractControl): {[key:string]:any}|null{
    const forbidden = /admin/.test(control.value);
    console.log("FORBIDDEN: ", forbidden)
    return forbidden ? {'forbiddenName':{value:control.value}}:null; 
}

function forbiddenNameValidator(forbiddenName: RegExp):ValidatorFn{
    
}