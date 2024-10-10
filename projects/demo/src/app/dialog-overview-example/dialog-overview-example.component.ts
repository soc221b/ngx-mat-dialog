import { Component } from '@angular/core';
import { MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DialogOverviewExampleDialog } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { MatDialogDirective } from 'projects/ngx-mat-dialog/src/public-api';

@Component({
  selector: 'dialog-overview-example',
  templateUrl: 'dialog-overview-example.component.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    NgIf,
    MatDialogModule,
    MatDialogDirective,
    DialogOverviewExampleDialog,
  ],
})
export class DialogOverviewExample {
  name: string = '';
  animal: string = '';
  visible: boolean = false;
  config: MatDialogConfig<undefined> = {};

  openDialog(): void {
    this.visible = true;
  }

  onVisibleChange(visible: boolean): void {
    this.visible = visible;
    console.log('visible', visible);
  }
}
