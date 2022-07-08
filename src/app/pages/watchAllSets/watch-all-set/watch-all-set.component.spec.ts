import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchAllSetComponent } from './watch-all-set.component';

describe('WatchAllSetComponent', () => {
  let component: WatchAllSetComponent;
  let fixture: ComponentFixture<WatchAllSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchAllSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchAllSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
