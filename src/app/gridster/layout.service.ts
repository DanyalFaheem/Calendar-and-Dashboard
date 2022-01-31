import { Injectable } from '@angular/core';
import { CompactType, DisplayGrid, GridsterConfig, GridsterItem, GridsterItemComponentInterface, GridType } from 'angular-gridster2';
import { UUID } from 'angular2-uuid'
export interface IComponent {
  id: string;
  componentRef: string;

}
@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  static itemInit(item: GridsterItem, itemComponent: GridsterItemComponentInterface): void {
    console.info('itemInitialized', item, itemComponent);
  }
  public components: IComponent[] = [];
  dropId: string = '';
  public options: GridsterConfig = {
    mobileBreakpoint: 600,
    gridType: GridType.Fixed,
    displayGrid: 'onDrag&Resize',
    // compactType: 'compactUp',
    draggable: {
      enabled: true
    },
    swap: true,
    pushItems: false,
    enableEmptyCellDrop: true,
    resizable: {
      enabled: false
    },
    fixedColWidth: 250,
    fixedRowHeight: 200,
    setGridSize: false,
    resizeEnabled: false,
    disablePushOnDrag: true,
    disablePushOnResize: true,
    minCols: 1,
    maxCols: 100,
    minRows: 1,
    maxRows: 100,
    maxItemCols: 100,
    minItemCols: 1,
    maxItemRows: 100,
    minItemRows: 1,
    maxItemArea: 600,
    minItemArea: 1,
    defaultItemCols: 1,
    defaultItemRows: 1
  };
  public layout: GridsterItem[] = [];
  addItem(): any {
    this.layout.push({
      cols: 1,
      id: UUID.UUID(),
      rows: 1,
      x: 1,
      y: 1,
      obj: {
        placeholder: '',
        type: '',
        checkboxes: [{
          value: ''
        }],
        country: '',
        timeline: ''
      },
      initCallback: LayoutService.itemInit,
      minItemCols: 1,
      maxItemCols: 100,
      maxItemRows: 100,
      minItemRows: 1,
      minItemArea: 1,
      maxItemArea: 25,
      dragEnabled: true,
      resizeEnabled: true,
      compactEnabled: true
    });
    //console.log(this.layout[this.layout.length - 1])
    this.setDropId(this.layout[this.layout.length - 1].id)
    //console.log(this.components)
  }
  deleteItem(id: string): void {
    const item = this.layout.find(d => d.id === id);
    this.layout.splice(this.layout.indexOf(<GridsterItem>item), 1);
    const comp = this.components.find(c => c.id === id);
    this.components.splice(this.components.indexOf(<IComponent>comp), 1);
  }
  setDropId(dropId: string): void {
    this.dropId = dropId;
  }
  dropItem(dragId: string): void {
    const { components } = this;
    const comp = components.find(c => c.id === this.dropId);

    const updateIdx: number = comp ? components.indexOf(comp) : components.length;
    const componentItem: IComponent = {
      id: this.dropId,
      componentRef: dragId
    };
    this.components = Object.assign([], components, { [updateIdx]: componentItem });
  }
  getComponentRef(id: string): any {
    const comp = this.components.find(c => c.id === id);
    if (comp == null) {
      return '';
    }
    else {
      return comp.componentRef;
    }
  }
  getComponent(id: string) {
    return this.components.find(c => c.id === id);
  }
  getLayout(id: string) {
    return this.layout.find(c => c.id === id);
  }
  getLayouts() {
    return this.layout;
  }
  getComponents() {
    return this.components;
  }
  constructor() { }
}
