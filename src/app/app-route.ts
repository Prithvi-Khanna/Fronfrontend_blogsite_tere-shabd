

import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

export const MAIN_ROUTES : Routes = [
    {
        path : '',
        redirectTo: 'login',
        pathMatch: 'full',

    },
    {
        path: 'login',
        component: LoginComponent
    },
 {   
     path: 'home',
    component: HomeComponent
 },
 {
     path: 'sign-up',
     component: SignUpComponent
 },
{
    path: 'edit-profile',
    component: EditProfileComponent
},
{
    path: 'edit-blog',
    component: EditBlogComponent
},
{
    path: 'add-blog',
    component: AddBlogComponent
},
{
    path: 'view-profile',
    component: ViewProfileComponent
},
{
    path: 'profile',
    component: ProfileComponent
}
 
];