import { identifierModuleUrl } from '@angular/compiler';
import { Component, ComponentFactoryResolver, ComponentRef, Directive, Input, ViewContainerRef } from '@angular/core';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { CovidComponent } from './covid/covid.component';
import { InputComponent } from './input/input.component';

const components = {
 input: InputComponent,
 checkbox: CheckboxComponent,
 covid19: CovidComponent
};
@Directive({
  selector: '[appLayoutItem]'
})
export class LayoutItemDirective {
  @Input() componentRef!: 'input' | 'checkbox' | 'covid19'; // 
  @Input() obj:any;
  @Input() currentId = ''
  component!: ComponentRef<InputComponent | CheckboxComponent | CovidComponent>;
  
  constructor(
    private container: ViewContainerRef,
    private resolver: ComponentFactoryResolver
  ) { }
  ngOnChanges(): void {
    const component = components[this.componentRef];
    this.container.clear()
    if (component) {
      const factory = this.resolver.resolveComponentFactory<any>(component);
      this.component = this.container.createComponent(factory);
    }
    // console.log("Directive: ")
    // console.log(this.container.get(0))
    this.component.instance.item = this.obj;
    //console.log(this.obj)
  }

}
