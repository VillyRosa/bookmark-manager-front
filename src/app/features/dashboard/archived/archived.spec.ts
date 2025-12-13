import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Archived } from './archived';

describe('Archived', () => {
  let component: Archived;
  let fixture: ComponentFixture<Archived>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Archived]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Archived);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
