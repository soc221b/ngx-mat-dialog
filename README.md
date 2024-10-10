# NgxMatDialog

Type-safe Angular Material Dialogs Directive for Angular

## Installation

```bash
npm install ngx-mat-dialog
```

## Usage

```typescript
import { MatDialogDirective } from "ngx-mat-dialog";

@Component({
  selector: "dialog-overview-example",
  templateUrl: "dialog-overview-example.html",
  standalone: true,
  imports: [MatDialogDirective, DialogOverviewExampleDialog],
})
export class DialogOverviewExample {
  name = "";
  animal = "";
  visible = false;

  openDialog() {
    this.visible = true;
  }
}
```

```html
<button (click)="openDialog()">Open Dialog</button>

<ng-template matDialog [(matDialogVisible)]="visible">
  <dialog-overview-example-dialog
    [name]="name"
    [(animal)]="animal"
  ></dialog-overview-example-dialog>
</ng-template>
```

> **Note:** You can't use shorthand syntax like `*matDialog`, because it doesn't support `@Output()`. As a result, you cannot listen to the visibility changes of the dialog.

> **Note:** Avoid using `MatDialogConfig.data` to pass data to the dialog and retrieve `dialogResult` from the `MatDialogRef.close`. Instead, use `@Input()` and `@Output()` for type safety.

## API

**Selector:** `[matDialog]`

**Exported as:** `matDialog`

### Properties

| Input                                                     | Description                               |
| --------------------------------------------------------- | ----------------------------------------- |
| `@Input() matDialogVisible: boolean;`                     | Whether the dialog is visible.            |
| `@Input() matDialogConfig: MatDialogConfig<undefined>;`   | Configuration for the dialog.             |
| `@Output() matDialogVisibleChange: EventEmitter<boolean>` | Emits when the dialog visibility changes. |
| `dialogRef: null \| MatDialogRef<unknown, void>`          | Reference to the `MatDialogRef`.          |
