import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { ClientsModule } from './clients/clients.module';
import { AppRoutingModule } from './app-routing.module';
import { ClientsService } from './clients.service';
import { HttpClientModule } from '@angular/common/http';
import { ServiceProvidedModule } from './service-provided/service-provided.module';
import { ServiceProvidedService } from './service-provided.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientsModule,
    ServiceProvidedModule
  ],
  providers: [
    ClientsService,
    ServiceProvidedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
