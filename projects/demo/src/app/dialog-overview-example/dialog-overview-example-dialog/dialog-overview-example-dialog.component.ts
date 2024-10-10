import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.component.html',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
  ],
})
export class DialogOverviewExampleDialog {
  @Input({ required: true }) name!: string;
  private _animal!: string;
  public get animal(): string {
    return this._animal;
  }
  @Input({ required: true })
  public set animal(value: string) {
    this._animal = value;
  }

  @Output() animalChange = new EventEmitter<string>();

  constructor(public dialogRef: MatDialogRef<DialogOverviewExampleDialog>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(): void {
    this.animalChange.emit(this.animal);
    this.dialogRef.close();
  }
}
