import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    {path:"contact",component:ContactComponent,title:"contact"},
    {path:"product",component:ProductComponent,title:"product"},
    {path:"profile",component:ProfileComponent,title:"profile"},
    {path:"user",component:UserComponent,title:"user"},

];
