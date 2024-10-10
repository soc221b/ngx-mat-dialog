import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOverviewExample } from './dialog-overview-example.component';

describe('DialogOverviewExample', () => {
  let component: DialogOverviewExample;
  let fixture: ComponentFixture<DialogOverviewExample>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DialogOverviewExample],
    });
    fixture = TestBed.createComponent(DialogOverviewExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
