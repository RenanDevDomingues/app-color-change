import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorChangePage } from './color-change.page';

describe('ColorChangePage', () => {
  let component: ColorChangePage;
  let fixture: ComponentFixture<ColorChangePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorChangePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
