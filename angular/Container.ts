import { Component, Input } from "@angular/core";

import { container, ContainerSize } from "../compositions/container";
import { TClassname, compose } from "classy-ui";

@Component({
  selector: "container",
  template: '<div [class]="container"><ng-content></ng-content></div>'
})
export class Container {
  @Input() size: ContainerSize;
  @Input() tokens: TClassname;
  container: string;
  ngOnInit() {
    this.container = compose(container(this.size), this.tokens);
  }
}
