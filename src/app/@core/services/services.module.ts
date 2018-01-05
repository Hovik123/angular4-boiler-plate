import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

import {
    LocalStorageService,
    SessionStorageService,
    AlertService,
    LoaderService
} from './index';

const SERVICES = [
    LocalStorageService,
    SessionStorageService,
    AlertService,
    LoaderService
];

@NgModule({
    imports: [
        CommonModule,
    ],
    providers: [
        ...SERVICES,
    ],
})
export class ServicesModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
            ngModule: ServicesModule,
            providers: [
                ...SERVICES,
            ],
        };
    }
}
