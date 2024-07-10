import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Api1Component } from './pages/api1/api1.component';
import { Api2Component } from './pages/api2/api2.component';
import { Api3Component } from './pages/api3/api3.component';
import { Api4Component } from './pages/api4/api4.component';
import { Api5Component } from './pages/api5/api5.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'api1',
    pathMatch: 'full'
  },
  {
    path: 'api1',
    component: Api1Component
  },
  {
    path: 'api2',
    component: Api2Component
  },
  {
    path: 'api3',
    component: Api3Component
  },
  {
    path: 'api4',
    component: Api4Component
  },
  {
    path: 'api5',
    component: Api5Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
