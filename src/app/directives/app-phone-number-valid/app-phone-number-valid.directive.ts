import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPhoneNumberValid]',
})
export class AppPhoneNumberValidDirective {
  @Input() set appPhoneNumberValid(value: string) {
    this.vcRef.clear();

    if (value) {
      if (
        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(
          value
        )
      ) {
        this.vcRef.clear();
      } else {
        this.vcRef.createEmbeddedView(this.templateRef);
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
