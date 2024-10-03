import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAtividadesComponent } from './modal-atividades.component';

describe('ModalAtividadesComponent', () => {
  let component: ModalAtividadesComponent;
  let fixture: ComponentFixture<ModalAtividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalAtividadesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAtividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
