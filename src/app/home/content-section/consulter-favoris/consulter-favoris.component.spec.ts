import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterFavorisComponent } from './consulter-favoris.component';

describe('ConsulterFavorisComponent', () => {
  let component: ConsulterFavorisComponent;
  let fixture: ComponentFixture<ConsulterFavorisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterFavorisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterFavorisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
