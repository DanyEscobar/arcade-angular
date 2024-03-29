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
import { PublicityComponent } from './publicity/publicity.component';
import {CarouselModule} from "ngx-bootstrap/carousel";
import { StatsComponent } from './stats/stats.component';
import { ClientsSliderComponent } from './clients-slider/clients-slider.component';
import { ProjectsComponent } from './projects/projects.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HeroComponent,
    SidebarComponent,
    FooterComponent,
    IntroductionComponent,
    BannerComponent,
    ContactFormComponent,
    ServicesComponent,
    PublicityComponent,
    StatsComponent,
    ClientsSliderComponent,
    ProjectsComponent
  ],
    exports: [
        HeaderComponent,
        HeroComponent,
        FooterComponent,
        BannerComponent,
        ContactFormComponent,
        ReactiveFormsModule,
        IntroductionComponent,
        ServicesComponent,
        PublicityComponent,
        StatsComponent,
        ClientsSliderComponent,
        ProjectsComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    CarouselModule
  ]
})
export class ComponentsModule { }
