import {Injectable} from '@angular/core';

import {LocalStorageService} from '../app/localStorage.service';

@Injectable()
export class LogoutHelper {

    constructor (private localStorageService: LocalStorageService) {
    }

    logout (): boolean {
        if (this.localStorageService.get('token')) {
            this.localStorageService.remove('token');
            this.localStorageService.remove('user');
        }
        return true;
    }
}
