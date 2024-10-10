import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  flush,
} from '@angular/core/testing';
import { MatDialogDirective } from './ngx-mat-dialog.directive';
import { Component, Input } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'dialog-example-dialog',
  template: `<h1 mat-dialog-title>Hi {{ name }}</h1>`,
  standalone: true,
  imports: [MatDialogModule],
})
export class DialogExampleDialog {
  @Input() name?: string;
}

@Component({
  selector: 'dialog-example',
  template: `
    <button (click)="openDialog()">Open Dialog</button>

    <ng-template matDialog [(matDialogVisible)]="visible">
      <dialog-example-dialog name="Pizza"></dialog-example-dialog>
    </ng-template>
  `,
  standalone: true,
  imports: [MatDialogDirective, DialogExampleDialog],
})
export class DialogExample {
  visible: boolean = false;

  openDialog(): void {
    this.visible = true;
  }

  onVisibleChange(visible: boolean): void {
    this.visible = visible;
  }
}

describe('MatDialogDirective', () => {
  let component: DialogExample;
  let fixture: ComponentFixture<DialogExample>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DialogExample, MatDialogModule, NoopAnimationsModule],
      providers: [],
    });
    fixture = TestBed.createComponent(DialogExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open dialog', fakeAsync(() => {
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();

    flush();

    const overlayContainer = TestBed.inject(OverlayContainer);
    const title = overlayContainer
      .getContainerElement()
      .querySelector('[mat-dialog-title]')!;
    expect(title.textContent).toContain('Pizza');
  }));
});
