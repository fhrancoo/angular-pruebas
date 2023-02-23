import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidePegeComponent } from './slide-pege.component';

describe('SlidePegeComponent', () => {
  let component: SlidePegeComponent;
  let fixture: ComponentFixture<SlidePegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidePegeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidePegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
