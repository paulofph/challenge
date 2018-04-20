import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppsService } from './apps.service';

describe('AppsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppsService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([AppsService], (service: AppsService) => {
    expect(service).toBeTruthy();
  }));
});
