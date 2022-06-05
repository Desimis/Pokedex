import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeviewComponent } from './pokeview.component';

describe('PokeviewComponent', () => {
  let component: PokeviewComponent;
  let fixture: ComponentFixture<PokeviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
