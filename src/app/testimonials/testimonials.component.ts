import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
  standalone: true
})
export class TestimonialsComponent {
  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/']);
  }

}
