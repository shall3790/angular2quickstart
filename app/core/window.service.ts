import {Injectable} from '@angular/core' 
import {window} from '@angular/platform-browser/src/facade/browser'; 
//-------------------------------------------------------------------------------------------------- // Service Class: //--------------------------------------------------------------------------------------------------
@Injectable()
export class WindowService { 
     
    constructor() {
        
    } 

    get nativeWindow() : Window { 
        return window;
    }
}