import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmListComponent } from './fm-list.component';

describe('FmListComponent', () => {
  let component: FmListComponent;
  let fixture: ComponentFixture<FmListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
