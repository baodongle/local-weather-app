import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, inject, TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService],
    })
  );

  it('should be created', async(
    inject([WeatherService], (service: WeatherService) => {
      expect(service).toBeTruthy();
    })
  ));
});
