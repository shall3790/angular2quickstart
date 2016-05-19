/* tslint:disable:no-unused-variable */
import { Http, Headers, Response, RequestMethod, RequestOptions, RequestOptionsArgs, URLSearchParams } from '@angular/http';

import { AppComponent } from './app.component';
import { BasicService } from './core/basic.service.ts';


import {
  expect, it, iit, xit,
  describe, ddescribe, xdescribe,
  beforeEach, beforeEachProviders, withProviders,
  async, inject
} from '@angular/core/testing';

import { TestComponentBuilder } from '@angular/compiler/testing';

import { By }             from '@angular/platform-browser';
import { provide }        from '@angular/core';
import { ViewMetadata }   from '@angular/core';
import { PromiseWrapper } from '@angular/core/src/facade/promise';

////////  SPECS  /////////////

/// Delete this
describe('Smoke test', () => {
  it('should run a passing test', () => {
    expect(true).toEqual(true, 'should pass');
  });
});




describe("A suite is just a function", function () {
    var a: boolean;

    it("and so is a spec", function () {
        a = false;

        expect(a).toBe(true);
    });
});

describe('AppComponent with new', function () {
    //_service: BasicService = new BasicService(new Http());
    it('should instantiate component', () => {
        //expect(new AppComponent(new Http).toBeDefined('Whoopie!');
  });
});

describe('AppComponent with TCB', function () {

  it('should instantiate component',
    async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {

    tcb.createAsync(AppComponent).then(fixture => {
      expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
    });
  })));

  it('should have expected <h1> text',
    async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {

      tcb.createAsync(AppComponent).then(fixture => {
      // fixture.detectChanges();  // would need to resolve a binding but we don't have a binding

      let h1 = fixture.debugElement.query(el => el.name === 'h1').nativeElement;  // it works

          h1 = fixture.debugElement.query(By.css('h1')).nativeElement;            // preferred

      expect(h1.innerText).toMatch(/angular 2 app/i, '<h1> should say something about "Angular 2 App"');
    });

  })));
});
