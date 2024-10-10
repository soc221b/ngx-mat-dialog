import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogOverviewExample } from './dialog-overview-example.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('DialogOverviewExample', () => {
  let component: DialogOverviewExample;
  let fixture: ComponentFixture<DialogOverviewExample>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DialogOverviewExample, NoopAnimationsModule],
    });
    fixture = TestBed.createComponent(DialogOverviewExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
