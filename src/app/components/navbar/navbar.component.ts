import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  activeLink!: string;

  constructor(private readonly router: Router) {
    this.initialize();
  }

  initialize() {
    this.activeLink = 'API 1';
    this.router.navigateByUrl('api1');
  }

  activateLink(activeLink: string) {
    this.activeLink = activeLink;
  }

}
