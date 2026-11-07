import { TestBed } from '@angular/core/testing';
import { Maestrosapi } from './maestrosapi';

describe('Maestrosapi', () => {
  let service: Maestrosapi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Maestrosapi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
