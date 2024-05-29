import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherClockComponent } from './weather-clock.component';

describe('WeatherClockComponent', () => {
  let component: WeatherClockComponent;
  let fixture: ComponentFixture<WeatherClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherClockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
