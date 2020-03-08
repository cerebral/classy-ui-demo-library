import { Component, Input } from "@angular/core";

import { primaryButton } from "../compositions/buttons";

@Component({
  selector: "primary-button",
  template:
    '<button [disabled]="disabled" [class]="primaryButton(disabled)">{{text}}</button>'
})
export class PrimaryButton {
  @Input() text: string;
  @Input() disabled: boolean = false;
  primaryButton = primaryButton;
}
