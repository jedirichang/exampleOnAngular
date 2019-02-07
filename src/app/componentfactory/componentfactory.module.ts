import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormTemplateComponent } from './form-template/form-template.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { ComponentFactoryRoutingModule } from './componentfactory-routing.module';

@NgModule({
  declarations: [FormTemplateComponent, MainComponentComponent],
  imports: [
    CommonModule,
    ComponentFactoryRoutingModule
  ],
  entryComponents:[FormTemplateComponent]
})
export class ComponentfactoryModule { }
