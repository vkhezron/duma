import { Component } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { AboutUsComponent } from '../about-us/about-us.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-layout',
  imports: [RouterModule, AboutUsComponent, HeaderComponent,
    FooterComponent
   ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  standalone: true
})
export class LayoutComponent {

}
