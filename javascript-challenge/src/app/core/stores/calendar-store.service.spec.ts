import { TestBed } from '@angular/core/testing';

import { CalendarStoreService } from './calendar-store.service';

describe('CalendarStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalendarStoreService = TestBed.get(CalendarStoreService);
    expect(service).toBeTruthy();
  });
});
