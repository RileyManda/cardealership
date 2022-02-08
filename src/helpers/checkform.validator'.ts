import { FormGroup } from '@angular/forms';
export function CheckForm(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors['CheckForm']) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // error if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ CheckForm: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
