import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatementComponent } from './statement/statement.component';
import { FilterPipe } from './pipe/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    RegisterComponent,
    LoginComponent,
    PagenotfoundComponent,
    DashboardComponent,
    StatementComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
   
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
