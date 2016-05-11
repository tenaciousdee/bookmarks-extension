// We need to reference a type definition (or 'typings') file
// to let TypeScript recognize the Angular "promise" function
// (we'll need this later on) otherwise we'll get compile errors.
/// <reference path="../node_modules/angular2/typings/browser.d.ts" />

// Angular's "bootstrap" function can be imported
// from the angular2/platform/browser module.
// Since we want to bootstrap the "BookmarkComponent",
// we have to import it, too.
import { bootstrap }    from 'angular2/platform/browser';
import { ListComponent } from './list.component';

bootstrap( ListComponent );
