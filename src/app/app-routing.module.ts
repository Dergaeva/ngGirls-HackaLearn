import { LoginTestComponent } from './login-test/login-test.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin/admin.component";
import {AuthGuard} from "./auth/auth.guard";

const routes: Routes = [
  { path: '', component: LoginTestComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
