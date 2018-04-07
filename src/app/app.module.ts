import { EmployeeService } from './Others/employee.service';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeFilterComponent } from './employee-filter/employee-filter.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {EmployeeComponent} from './employee/employee.component';
import { FormsModule } from '@angular/forms';
import { EmployeePipePipe } from './employee-pipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AlertModule } from 'ngx-bootstrap';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'employees', component: EmployeeListComponent },
  {path: 'employees/:code', component: EmployeeComponent },
  {path: 'home', component: HomeComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    InterpolationComponent,
    EmployeeListComponent,
    EmployeePipePipe,
    EmployeeFilterComponent,
    EmployeeFilterComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes,{useHash: true})
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
