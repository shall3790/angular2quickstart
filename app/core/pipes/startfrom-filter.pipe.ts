
import {  PipeTransform, Pipe } from '@angular/core';
import { Offender } from '../offender';


declare var filterFilter: any;

@Pipe({
    name: 'startFrom'
})
export class StartFromFilterPipe implements PipeTransform {
    transform(value: Offender[], args: string[]): Offender[] {
        let start = args[0] ? +args[0] : 0;
        if (value) {
            var results = value.slice(start);
        }
        return results;
    }
    
}