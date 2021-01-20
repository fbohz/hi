import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})

// we simplify the router api by using an adapter
export class RouterAdapterService {
  constructor(private router: Router) {}

  goToUrl(url: string) {
    this.router.navigateByUrl(url);
  }
}
