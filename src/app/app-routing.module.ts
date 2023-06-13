import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // http://localhost:4200/
  {
  path:'', redirectTo:'contact/admin',pathMatch:'full'
  },
  // contactManager - component -http://localhost:4200/contact/admin
  {
    path:'contact/admin',component:ContactManagerComponent
  },
  // addContact -  http://localhost:4200/contact/add
  {
    path:'contact/add',component:AddContactComponent 
  },
  // update-contact - http://localhost:4200/contact/update
  //  update and view can be used for a particular id or user so - http://localhost:4200/contact/update/Id
  {
    path:'contact/update/:Id',component:UpdateContactComponent 
  },
  // view contact -http://localhost:4200/contact/view/contactId
  {
    path:'contact/view/:contactId',component:ViewContactComponent
  },
  //page not found
  {
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
