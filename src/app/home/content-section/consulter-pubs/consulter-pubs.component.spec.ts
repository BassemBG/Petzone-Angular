import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterPubsComponent } from './consulter-pubs.component';

describe('ConsulterPubsComponent', () => {
  let component: ConsulterPubsComponent;
  let fixture: ComponentFixture<ConsulterPubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterPubsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterPubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
