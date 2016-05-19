import { Component } from '@angular/core';
import { BasicService } from './core/basic.service';
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    providers: [BasicService, HTTP_PROVIDERS, ROUTER_PROVIDERS]

})
export class AppComponent {
    appName: string = 'Angular2 QuickStart';
    pageTitle: string = 'Home';

    constructor(private _basicService: BasicService) {
        
    }


}
