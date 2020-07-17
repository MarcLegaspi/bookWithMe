import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RentalDetailComponent } from './rental/rental-detail/rental-detail.component';
import { RentalListingComponent } from './rental/rental-listing/rental-listing.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'rentals', pathMatch: 'full'},  
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
