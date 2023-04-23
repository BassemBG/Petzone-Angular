import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPubComponent } from './ajouter-pub.component';

describe('AjouterPubComponent', () => {
  let component: AjouterPubComponent;
  let fixture: ComponentFixture<AjouterPubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterPubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterPubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
