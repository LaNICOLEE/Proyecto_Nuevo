import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsculturasComponent } from './esculturas.component';

describe('EsculturasComponent', () => {
  let component: EsculturasComponent;
  let fixture: ComponentFixture<EsculturasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EsculturasComponent]
    });
    fixture = TestBed.createComponent(EsculturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
