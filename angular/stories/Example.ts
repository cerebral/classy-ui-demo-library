import { Component, Input } from "@angular/core";

import { TClassname, compose, tokens } from "classy-ui";

@Component({
  selector: "example",
  template:
    '<div [class]="classes.container"><pre [class]="classes.pre">{{code}}</pre><div [class]="classes.code"><ng-content></ng-content></div></div>'
})
export class Example {
  @Input() code: string;
  classes: {
    container: TClassname;
    pre: TClassname;
    code: TClassname;
  };
  ngOnInit() {
    this.classes = {
      container: compose(tokens.margin.SPACE_40),
      pre: compose(
        tokens.borderColor.BLUE_50,
        tokens.borderWidth.WIDTH_2,
        tokens.borderStyle.SOLID,
        tokens.padding.SPACE_40,
        tokens.display.BLOCK
      ),
      code: compose(tokens.marginTop.SPACE_50)
    };
  }
}
