import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterDetailsPubComponent } from './consulter-details-pub.component';

describe('ConsulterDetailsPubComponent', () => {
  let component: ConsulterDetailsPubComponent;
  let fixture: ComponentFixture<ConsulterDetailsPubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterDetailsPubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterDetailsPubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
