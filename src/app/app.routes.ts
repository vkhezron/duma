import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'about-us', component: AboutUsComponent },
      { path: 'testimonials', component: TestimonialsComponent }
    ]
  }
];
