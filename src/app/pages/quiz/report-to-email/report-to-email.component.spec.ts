import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportToEmailComponent } from './report-to-email.component';

describe('ReportToEmailComponent', () => {
  let component: ReportToEmailComponent;
  let fixture: ComponentFixture<ReportToEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportToEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportToEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
