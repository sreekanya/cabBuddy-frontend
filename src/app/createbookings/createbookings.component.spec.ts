import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatebookingsComponent } from './createbookings.component';

describe('CreatebookingsComponent', () => {
  let component: CreatebookingsComponent;
  let fixture: ComponentFixture<CreatebookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatebookingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatebookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
