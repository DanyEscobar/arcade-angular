import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {ComponentsModule} from '../components/components.module';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicePageComponent } from './service-page/service-page.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent,
    ServicePageComponent
  ],
  exports: [
    ReactiveFormsModule
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
