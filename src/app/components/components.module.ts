import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {RouterModule} from "@angular/router";
import { FooterComponent } from './footer/footer.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { BannerComponent } from './banner/banner.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicesComponent } from './services/services.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HeroComponent,
    SidebarComponent,
    FooterComponent,
    IntroductionComponent,
    BannerComponent,
    ContactFormComponent,
    ServicesComponent
  ],
  exports: [
    HeaderComponent,
    HeroComponent,
    FooterComponent,
    BannerComponent,
    ContactFormComponent,
    ReactiveFormsModule,
    IntroductionComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
