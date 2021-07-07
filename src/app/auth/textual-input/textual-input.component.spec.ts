import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextualInputComponent } from './textual-input.component';

describe('TextualInputComponent', () => {
  let component: TextualInputComponent;
  let fixture: ComponentFixture<TextualInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextualInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextualInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
