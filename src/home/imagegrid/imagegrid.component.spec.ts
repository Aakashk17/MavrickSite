import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagegridComponent } from './imagegrid.component';

describe('ImagegridComponent', () => {
  let component: ImagegridComponent;
  let fixture: ComponentFixture<ImagegridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagegridComponent]
    });
    fixture = TestBed.createComponent(ImagegridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
