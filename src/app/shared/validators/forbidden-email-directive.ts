import { Directive, Input } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { ForbiddenEmailValidator } from './functions';

@Directive ({
    selector: '[forbiddenEmail]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: ForbiddenEmailDirective,
        multi: true
    }]
})
export class ForbiddenEmailDirective implements Validator {
    @Input() forbiddenEmail: string;

    validate(control: AbstractControl): ValidationErrors {
        return this.forbiddenEmail ?
            ForbiddenEmailValidator(this.forbiddenEmail)(control) : null;
    }
}
