import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWordSearchComponent } from './add-word-search.component';

describe('AddWordSearchComponent', () => {
  let component: AddWordSearchComponent;
  let fixture: ComponentFixture<AddWordSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWordSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWordSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
