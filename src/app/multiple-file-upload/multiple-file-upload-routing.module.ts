import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultipleFileUploadComponentComponent } from './multiple-file-upload-component/multiple-file-upload-component.component';

const routes: Routes = [
  {
    path: '',
    component: MultipleFileUploadComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultipleFileUploadRoutingModule { }
