import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BaseComponentComponent } from './base-component/base-component.component';

const routes: Routes = [
  {
    path:'',
    component:BaseComponentComponent,
    pathMatch:'full'
  },
  {
    path: 'multiplefileupload',
    loadChildren: './multiple-file-upload/multiple-file-upload.module#MultipleFileUploadModule'
  },
  {
    path:'componentfactory',
    loadChildren:'./componentfactory/componentfactory.module#ComponentfactoryModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(

  ){

  }
 

 }
