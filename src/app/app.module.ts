import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { BasicAuthService } from './basic-auth.service';
import { AuthService } from './auth.service';
import { TestService } from './test.service';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    NavBarComponent,
    LoginComponent,
    SignUpComponent,
    EditProfileComponent,
    AddBlogComponent,
    EditBlogComponent,
    ViewProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TestService ,AuthService,{  
    provide:HTTP_INTERCEPTORS, useClass: BasicAuthService, multi:true 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
