
import {  PipeTransform, Pipe } from '@angular/core';
import { Offender } from '../offender';


@Pipe({
    name: 'hlslice'
})
export class HlSlicePipe { //implements PipeTransform {

    transform(value: Offender[], start: number, end: number): Offender[] {
        //let filter = args[0] ? args[0].toLocaleLowerCase() : null;
        //let filter = args[0] ? args[0] : null;
        //let filter: string[] = args ? args.split(':') : null;
        //let start: number = parseInt(args[0]);
        //let end: number = parseInt(args[1]);
        var results: Offender[] = [];

        results = value.slice(start, end);

        console.debug('calling hlslice pipe...');
        //if data is present
        //if (value) {
        //    if (this.searchType == 'AND') {
        //        results = value;

        //        for (var i = 0; i < filter.length; i++) {
        //            results = <RootObject[]>filterFilter(results, filter[i]);
        //        }
        //    }
        //}
        return results;
        
    }
}