import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherwidgetComponent } from './weatherwidget.component';

describe('WeatherwidgetComponent', () => {
  let component: WeatherwidgetComponent;
  let fixture: ComponentFixture<WeatherwidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherwidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
