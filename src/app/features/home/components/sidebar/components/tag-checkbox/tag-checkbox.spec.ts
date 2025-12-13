import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagCheckbox } from './tag-checkbox';

describe('TagCheckbox', () => {
  let component: TagCheckbox;
  let fixture: ComponentFixture<TagCheckbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagCheckbox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagCheckbox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
