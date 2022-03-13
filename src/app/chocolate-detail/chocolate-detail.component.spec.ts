import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChocolateDetailComponent } from './chocolate-detail.component';

describe('ChocolateDetailComponent', () => {
  let component: ChocolateDetailComponent;
  let fixture: ComponentFixture<ChocolateDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChocolateDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChocolateDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
