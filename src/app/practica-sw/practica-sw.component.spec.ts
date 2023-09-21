import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticaSwComponent } from './practica-sw.component';

describe('PracticaSwComponent', () => {
  let component: PracticaSwComponent;
  let fixture: ComponentFixture<PracticaSwComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PracticaSwComponent]
    });
    fixture = TestBed.createComponent(PracticaSwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
