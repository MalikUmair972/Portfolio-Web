import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnelComponent } from './turnel.component';

describe('TurnelComponent', () => {
  let component: TurnelComponent;
  let fixture: ComponentFixture<TurnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TurnelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TurnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
