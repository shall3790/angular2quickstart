import { Component } from '@angular/core';
import { BasicService } from './core/basic.service';
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { HTTP_PROVIDERS } from '@angular/http';
import { Subject }          from 'rxjs/Subject';
import { WindowService } from './core/window.service';
//import { ToolbarComponent } from './toolbar.component';
import { SortColumnDirective } from './column-sort.directive';
 
import { Chain, State } from './core/starship';

declare var jQuery: any;

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    providers: [BasicService, HTTP_PROVIDERS, ROUTER_PROVIDERS, WindowService ],
    directives: [SortColumnDirective]
})
export class AppComponent {
    appName: string = 'Angular2 QuickStart';
    pageTitle: string = 'Hello World';
    states: State[] = [];
    private searchTermStream = new Subject<string>();
    
    constructor(private window: WindowService, private _basicService: BasicService) {
        
   
        
    }
    
    sortAction() : void {
        console.log('sort action fired');
    }

    ngOnInit() {
        this.loadStates();
        
        // this.searchTermStream
        //     .debounceTime(300)
        //     .distinctUntilChanged()
        //     .switchMap((term: string) => {} )
        //     .subscribe
            // .switchMap((term: string) => {
            //     if (term != null) {
            //         this.filterList(term);
            //         //update cache
            //         this._log.debug('search-grid.component: update cache, searchText = ' + term, this);
            //         this._returnedCheckApiService.getOffenderCache().searchText = term;
            //     }
            //     //this.wikipediaService.search(term);
            // });
    }
    
    public login() {
        let urlBuilder: any = [];
        urlBuilder.push(
            'response_type=code',
            'client_id=99956547994-5v9f3r3om50pnp0o0o6m4o11sk7hagqc.apps.googleusercontent.com',
            'redirect_uri=http://localhost:9000',
            'scope=profile email'  
        );
        
        var url = 'https://accounts.google.com/o/oauth2/auth?' + urlBuilder.join('&');
        var options = 'width=500, height=500, left='+ (window.outerWidth - 500) / 2 +
        ', top=' + (window.outerHeight - 500) / 2;
        window.open(url, '', options ).addEventListener('onload', function() {
            console.log('onload');
        });
                   
        //this.oauthService.initImplicitFlow();
        //this.oAuthService.initImplicitFlow();
    }

    load() {
        console.log('load');
    }

    private loadStates(): void {
        this._basicService.getStates()
            .subscribe(data => {
                this.states = data
            },
            error => {
                let errorMessage = <any>error;
                console.error(errorMessage);
            });
    }
}
