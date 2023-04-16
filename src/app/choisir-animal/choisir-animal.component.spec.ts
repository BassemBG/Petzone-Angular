import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoisirAnimalComponent } from './choisir-animal.component';

describe('ChoisirAnimalComponent', () => {
  let component: ChoisirAnimalComponent;
  let fixture: ComponentFixture<ChoisirAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoisirAnimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoisirAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
