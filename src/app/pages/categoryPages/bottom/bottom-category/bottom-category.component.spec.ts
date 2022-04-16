import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomCategoryComponent } from './bottom-category.component';

describe('BottomCategoryComponent', () => {
  let component: BottomCategoryComponent;
  let fixture: ComponentFixture<BottomCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
