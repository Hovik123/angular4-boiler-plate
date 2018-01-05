import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LocalStorageService} from '../../../@core/services/app/localStorage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

    constructor(private localStorageService: LocalStorageService,
                private router: Router) {
    }

    ngOnInit() {
    }

    logout(): void {
        this.localStorageService.remove('crawl-token');
        this.router.navigate(['auth']);
    }
}
