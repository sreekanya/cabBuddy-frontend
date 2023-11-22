import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcabsComponent } from './addcabs.component';

describe('AddcabsComponent', () => {
  let component: AddcabsComponent;
  let fixture: ComponentFixture<AddcabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
