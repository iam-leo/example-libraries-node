import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaLibreriasComponent } from './vista-librerias.component';

describe('VistaLibreriasComponent', () => {
  let component: VistaLibreriasComponent;
  let fixture: ComponentFixture<VistaLibreriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaLibreriasComponent]
    });
    fixture = TestBed.createComponent(VistaLibreriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
