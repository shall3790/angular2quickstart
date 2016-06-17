import { Component }        from '@angular/core';
import { BasicService }     from './core/basic.service';
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { HTTP_PROVIDERS }   from '@angular/http';
import { Subject }          from 'rxjs/Subject';
import { WindowService }    from './core/window.service';
import { OrderBy }          from './core/pipes/orderby.pipe';

//import { ToolbarComponent } from './toolbar.component';
import { SortColumnDirective } from './column-sort.directive';
import { SortColumnComponent } from './column.component';

import { Chain, Company, State } from './core/starship';

declare var jQuery: any;
import * as _ from 'lodash';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    pipes: [OrderBy],
    providers: [BasicService, HTTP_PROVIDERS, ROUTER_PROVIDERS, WindowService ],
    directives: [SortColumnDirective, SortColumnComponent]
})
export class AppComponent {
    appName: string = 'Angular2 QuickStart';
    pageTitle: string = 'Sort Directive Test';
    private states: State[] = [];
    private companies: Company[] = [];
    private sortType: string = '';
    private active: string = '';
    private sortReverse: boolean = false;

    private searchTermStream = new Subject<string>();
    
    constructor(private window: WindowService, private _basicService: BasicService) {
        console.log('lodash version:', _.VERSION);
        console.log('');
    }
    
    private sortCompAction(event: any): void {
        console.log('component sort action: '+ JSON.stringify(event));
        

        if(event.sortDirection == 'asc') {
            this.sortType = '+'+event.sortField;
        }
        else {
            this.sortType = '-'+event.sortField;
        }
    }

    sortAction(event: any) : void {
        //console.log('sort action fired: '+ JSON.stringify(event));
        this.active = event.sortField;
        this.companies = _.orderBy(this.companies, [event.sortField], [event.sortDirection]);

        if(event.sortDirection) {
            this.sortType = '+'+event.sortField;    
        }
        else {
            this.sortType = '-'+event.sortField;
        }
        
    }

    ngOnInit() {
        this.loadStates();
        this.loadCompanies();
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

    private sortGrid(): void {
        //this.sales = _.orderBy(this.sales, [op.sortField], [op.sortDirection]); 
    }

    private loadCompanies(): void {
        this._basicService.getCompanies()
            .subscribe(data => {
                this.companies = data
            },
            error => {
                let errorMessage = <any>error;
                console.error(errorMessage);
            });
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
