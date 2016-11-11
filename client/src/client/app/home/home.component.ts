import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})

export class HomeComponent {
  constructor(private router: Router) {
    this.router = router;
  }
  routeTo(route: string) {
    this.router.navigate([route]);
  }
}
