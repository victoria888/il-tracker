import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipFormComponent } from './ship-form.component';

describe('ShipFormComponent', () => {
  let component: ShipFormComponent;
  let fixture: ComponentFixture<ShipFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
