import { AbstractControl, ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

export function ForbiddenEmailValidator(email: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const forbidden = control.value === email;

        return forbidden ? {'forbiddenEmail': {value: control.value}} : null;
    };
}

export function sameAsValidator(controls: string[]): ValidatorFn {
    return (control: FormGroup): ValidationErrors | null => {
        const compare = control.get(controls[0]);
        const compareTo = control.get(controls[1]);

        if (!compare || !compareTo) {
            return null;
        }

        return compare.value !== compareTo.value ? {'sameAs': {value: control.value}} : null;
    };
}
