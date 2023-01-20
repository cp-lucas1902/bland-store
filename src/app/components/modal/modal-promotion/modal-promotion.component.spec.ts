import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPromotionComponent } from './modal-promotion.component';

describe('ModalPromotionComponent', () => {
  let component: ModalPromotionComponent;
  let fixture: ComponentFixture<ModalPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPromotionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
