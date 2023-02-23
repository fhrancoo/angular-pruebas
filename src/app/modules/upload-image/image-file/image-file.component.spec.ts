import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageFileComponent } from './image-file.component';

describe('ImageFileComponent', () => {
  let component: ImageFileComponent;
  let fixture: ComponentFixture<ImageFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
