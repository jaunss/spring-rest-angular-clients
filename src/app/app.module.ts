import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { ClientsModule } from './clients/clients.module';
import { AppRoutingModule } from './app-routing.module';
import { ClientsService } from './clients.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServiceProvidedModule } from './service-provided/service-provided.module';
import { ServiceProvidedService } from './service-provided.service';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { AuthService } from './auth.service';
import { TokenInterceptor } from './token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientsModule,
    ServiceProvidedModule
  ],
  providers: [
    ClientsService,
    ServiceProvidedService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
