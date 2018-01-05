import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {
    FooterComponent,
    HeaderComponent,
    AlertComponent,
} from './components';

const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];


const COMPONENTS = [
    HeaderComponent,
    FooterComponent,
    AlertComponent
];


@NgModule({
    imports: [...BASE_MODULES],
    exports: [...BASE_MODULES, ...COMPONENTS],
    declarations: [...COMPONENTS],
})
export class ThemeModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
            ngModule: ThemeModule,
            providers: [],
        };
    }
}
