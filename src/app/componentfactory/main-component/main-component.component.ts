import { Component, OnInit, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { FormTemplateComponent } from '../form-template/form-template.component';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.less']
})
export class MainComponentComponent implements OnInit {
  @ViewChild('formTemplate', { read: ViewContainerRef }) formRef
  constructor(
    private componentFactoryResolver:ComponentFactoryResolver
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    const factory=this.componentFactoryResolver.resolveComponentFactory(FormTemplateComponent);
    const newTemplate=this.formRef.createComponent(factory);
  }

}
