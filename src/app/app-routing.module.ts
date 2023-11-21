import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [

  {
    // http://localhost:4200/
  path:'', component:HomeComponent
},
{
  path:'About', component:AboutComponent
},
{
  path:'Products',component:ProductComponent
},
{
  path:'Contacts',component:ContactComponent
},
{
  path:'Profile',component:ProfileComponent
},
{
  path:'**',component:PageNotFoundComponent
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
