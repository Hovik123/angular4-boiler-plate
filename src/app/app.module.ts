import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ThemeModule} from './@theme/theme.module';
import {CoreModule} from './@core/core.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {JWTInterceptor} from './@core/Interceptor/index';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ThemeModule.forRoot(),
        CoreModule.forRoot(),
    ],
    bootstrap: [AppComponent],
    providers: [
        [{provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true}]
    ]
})
export class AppModule { }
