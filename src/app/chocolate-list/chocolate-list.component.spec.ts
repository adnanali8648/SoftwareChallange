import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChocolateListComponent } from './chocolate-list.component';

describe('ChocolateListComponent', () => {
  let component: ChocolateListComponent;
  let fixture: ComponentFixture<ChocolateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChocolateListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChocolateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
