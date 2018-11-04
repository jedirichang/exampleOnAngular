import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleFileUploadComponentComponent } from './multiple-file-upload-component.component';

describe('MultipleFileUploadComponentComponent', () => {
  let component: MultipleFileUploadComponentComponent;
  let fixture: ComponentFixture<MultipleFileUploadComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleFileUploadComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleFileUploadComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
