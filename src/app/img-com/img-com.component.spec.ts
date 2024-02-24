import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgComComponent } from './img-com.component';

describe('ImgComComponent', () => {
  let component: ImgComComponent;
  let fixture: ComponentFixture<ImgComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgComComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
