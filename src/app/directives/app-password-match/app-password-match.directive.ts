import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPasswordMatch]',
})
export class AppPasswordMatch {
  @Input('appPasswordMatch') set appPasswordMatch(passwords: string[]) {
    const [password, confirmPassword] = passwords;
    if (password && confirmPassword) {
      if (password !== confirmPassword) {
        this.vcRef.clear();
        this.vcRef.createEmbeddedView(this.templateRef);
      } else {
        this.vcRef.clear();
      }
    } else {
      this.vcRef.clear();
    }
  }
  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
}
