import {Component, OnInit} from '@angular/core';
import {LoaderService} from './@core/services';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  showLoader: boolean;

  constructor(private loaderService: LoaderService,
              private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loaderService.hide(false);
      }
      if (event instanceof NavigationEnd) {
        this.loaderService.hide(true);
      }
    });
    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });
  }
}
