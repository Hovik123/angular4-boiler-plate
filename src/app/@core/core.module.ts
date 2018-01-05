import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesModule } from './services/services.module';
import {throwIfAlreadyLoaded} from './module-import-guard';

const APP_CORE_PROVIDERS = [
    ...ServicesModule.forRoot().providers
];

@NgModule({
    imports: [
        CommonModule,
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }

    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
            ngModule: CoreModule,
            providers: [
                ...APP_CORE_PROVIDERS,
            ],
        };
    }
}