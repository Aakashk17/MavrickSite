import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegcontainerComponent } from './regcontainer.component';

describe('RegcontainerComponent', () => {
  let component: RegcontainerComponent;
  let fixture: ComponentFixture<RegcontainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegcontainerComponent]
    });
    fixture = TestBed.createComponent(RegcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
