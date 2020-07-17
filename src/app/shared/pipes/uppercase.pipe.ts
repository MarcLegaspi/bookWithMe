import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'upper'
})
export class UpperCasePipe implements PipeTransform {
    transform(value: string, mode?: string) {
        if (!value || typeof value !== 'string') { 
            return '';
        }

        if (mode === 'firstLetterUpper') {
            return value.split(' ')
            .map(word => 
                word[0].toUpperCase() + word.slice(1))
            .join(' ');
        }

        return value.toUpperCase();
    }
}

// @Pipe({
//     name: 'firstUpperLetter'
// })
// export class FirstUpperLetterPipe implements PipeTransform {
//     transform(value: string) {
//         if (!value || typeof value !== 'string') { 
//             return '';
//         }

//     }
// }
