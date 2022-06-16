import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmplistComponent } from './emplist/emplist.component';
import { AuthGuardService } from './service/auth.guard';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'emplist',
    component: EmplistComponent,
    // canActivate: [AuthGuardService],
  },

  // { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  // { path: 'employee', component: EditComponent, canActivate: [AuthGuard] },
  // { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  exports: [RouterModule],
  providers: [AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
