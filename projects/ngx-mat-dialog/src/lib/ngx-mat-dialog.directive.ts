import {
  Directive,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
  TemplateRef,
  inject,
} from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[matDialog]',
  standalone: true,
  exportAs: 'matDialog',
})
export class MatDialogDirective implements OnChanges, OnDestroy {
  /**
   * Whether the dialog is visible.
   */
  @Input({ required: true, alias: 'matDialogVisible' })
  visible!: boolean;

  /**
   * Emits when the dialog visibility changes.
   */
  @Output('matDialogVisibleChange')
  visibleChange: EventEmitter<boolean> = new EventEmitter();

  /**
   * Configuration for the dialog.
   *
   * Never pass `data` for type safety. Use `@Input` on your component instead.
   */
  @Input({ alias: 'matDialogConfig' })
  config: MatDialogConfig<undefined> = {};

  private templateRef: TemplateRef<unknown> = inject(TemplateRef);

  private dialog: MatDialog = inject(MatDialog);

  /**
   * Reference to the `MatDialogRef` instance created when the dialog is opened.
   *
   * For type safety, do not pass `dialogResult`. Instead, use `@Output` on your component.
   */
  public get dialogRef(): MatDialogRef<unknown, void> | null {
    return this._dialogRef;
  }
  private set dialogRef(value: MatDialogRef<unknown, void> | null) {
    this._dialogRef = value;
  }
  private _dialogRef: MatDialogRef<unknown, void> | null = null;

  private afterClosedSubscription: Subscription | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    let changed = false;

    if (changes['visible'] !== undefined) {
      changed = true;
    }
    if (changes['config'] !== undefined) {
      changed = true;
    }

    if (changed) {
      this.destroy();

      if (this.visible) {
        this.visibleChange.emit(true);
        this.dialogRef = this.dialog.open(this.templateRef, this.config);
        this.afterClosedSubscription = this.dialogRef
          .afterClosed()
          .subscribe(() => this.destroy());
      }
    }
  }

  ngOnDestroy(): void {
    this.destroy();
  }

  private destroy(): void {
    if (this.afterClosedSubscription === null && this.dialogRef === null) {
      return;
    }
    this.afterClosedSubscription?.unsubscribe();
    this.afterClosedSubscription = null;
    this.dialogRef?.close();
    this.dialogRef = null;
    this.visibleChange.emit(false);
  }
}
