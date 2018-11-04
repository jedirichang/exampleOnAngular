import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultipleFileUploadRoutingModule } from './multiple-file-upload-routing.module';
import { MultipleFileUploadComponentComponent } from './multiple-file-upload-component/multiple-file-upload-component.component';

@NgModule({
  declarations: [MultipleFileUploadComponentComponent],
  imports: [
    CommonModule,
    MultipleFileUploadRoutingModule
  ]
})
export class MultipleFileUploadModule { }
