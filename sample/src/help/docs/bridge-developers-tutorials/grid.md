<br>

### 6. Grid
<br>

This wrapper encapsulates the KendoUI module `kendo.grid.min.js`, ensuring that it behaves as a standard Aurelia component. See how the Aurelia application uses this component **[here](#/help/docs/app_developers_tutorials/6._grid_component)** and **[here](#/samples/grid)**.
<br>

File `grid.js`
<br>
```javascript
import {inject, children, customElement, bindable} from 'aurelia-framework';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import 'kendo-ui/js/kendo.data.signalr.min';
import 'kendo-ui/js/kendo.filtercell.min';
import 'kendo-ui/js/kendo.grid.min';

@customElement('k-grid')
@generateBindables('kendoGrid')
@inject(Element)
export class Grid extends WidgetBase {

  @children('au-col') columns;

  @bindable kDataSource;
  @bindable options = {};

  constructor(element) {
    super('kendoGrid', element);
  }

  // initialization in bind() is giving issues in some scenarios
  // so, attached() is used for this control
  attached() {
    this._initialize();
  }

  _initialize() {
    // init grid on the <table> tag if initialization is from table
    // else, just use the root element
    this.target = isInitFromTable(this.element) ? this.element.children[0] : this.element;

    super._initialize();
  }

  _beforeInitialize(options) {
    // allow for both column definitions via HTML and via an array of columns
    if (this.columns && this.columns.length > 0) {
      options.columns = this.columns;
    }
  }

  enableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  }

  addRow() {
    if (this.widget) {
      this.widget.addRow();
    }
  }

  autoFitColumn(value) {
    if (this.widget) {
      this.widget.autoFitColumn(value);
    }
  }

  cancelChanges() {
    if (this.widget) {
      this.widget.cancelChanges();
    }
  }

  cancelRow() {
    if (this.widget) {
      this.widget.cancelRow();
    }
  }

  cellIndex(cell) {
    if (this.widget) {
      return this.widget.cellIndex(cell);
    }
  }

  clearSelection() {
    if (this.widget) {
      this.widget.clearSelection();
    }
  }

  closeCell() {
    if (this.widget) {
      this.widget.closeCell();
    }
  }

  collapseGroup(group) {
    if (this.widget) {
      this.widget.collapseGroup(group);
    }
  }

  collapseRow(row) {
    if (this.widget) {
      this.widget.collapseRow(row);
    }
  }

  current(cell) {
    if (this.widget) {
      return this.widget.current(cell);
    }
  }

  dataItem(row) {
    if (this.widget) {
      return this.widget.dataItem(row);
    }
  }

  destroy() {
    if (this.widget) {
      this.widget.destroy();
    }
  }

  editCell(cell) {
    if (this.widget) {
      this.widget.editCell(cell);
    }
  }

  editRow(row) {
    if (this.widget) {
      this.widget.editRow(row);
    }
  }

  expandGroup(row) {
    if (this.widget) {
      this.widget.expandGroup(row);
    }
  }

  expandRow(row) {
    if (this.widget) {
      this.widget.expandRow(row);
    }
  }

  getOptions() {
    if (this.widget) {
      return this.widget.getOptions();
    }
  }

  hideColumn(column) {
    if (this.widget) {
      this.widget.hideColumn(column);
    }
  }

  lockColumn(column) {
    if (this.widget) {
      this.widget.lockColumn(column);
    }
  }

  refresh() {
    if (this.widget) {
      this.widget.refresh();
    }
  }

  removeRow(row) {
    if (this.widget) {
      this.widget.removeRow(row);
    }
  }

  reorderColumn(destIndex, column) {
    if (this.widget) {
      this.widget.reorderColumn(destIndex, column);
    }
  }

  saveAsExcel() {
    if (this.widget) {
      this.widget.saveAsExcel();
    }
  }

  saveAsPDF() {
    if (this.widget) {
      this.widget.saveAsPDF();
    }
  }

  saveChanges() {
    if (this.widget) {
      this.widget.saveChanges();
    }
  }

  saveRow() {
    if (this.widget) {
      this.widget.saveRow();
    }
  }

  select(rows) {
    if (this.widget) {
      return this.widget.select(rows);
    }
  }

  setDataSource(dataSource) {
    if (this.widget) {
      this.widget.setDataSource(dataSource);
    }
  }

  setOptions(options) {
    if (this.widget) {
      this.widget.setOptions(options);
    }
  }

  showColumn(column) {
    if (this.widget) {
      this.widget.showColumn(column);
    }
  }

  unlockColumn(column) {
    if (this.widget) {
      this.widget.unlockColumn(column);
    }
  }
}

// if the first child node is a table tag
// then the user wants to initialize the Kendo Grid from an
// existing table
function isInitFromTable(element) {
  return element.children.length > 0 && element.children[0].nodeName === 'TABLE';
}
```
<br>

File `grid.html.js`
<br>
```HTML
<template>
  <content></content>
</template>
```
<br>

File `au-col`.js
<br>
```javascript
import {inject, noView, processContent, bindable, TargetInstruction} from 'aurelia-framework';

@noView
@processContent((compiler, resources, element, instruction) => {
  let html = element.innerHTML;
  if (html !== '') {
    instruction.template = html;
  }

  return true;
})
@inject(TargetInstruction)
export class AuCol {
  @bindable aggregates;
  @bindable attributes;
  @bindable columns;
  @bindable command;
  @bindable editor;
  @bindable encoded;
  @bindable field;
  @bindable filterable;
  @bindable footerTemplate;
  @bindable format = '';
  @bindable groupable;
  @bindable groupFooterTemplate;
  @bindable groupHeaderTemplate;
  @bindable headerAttributes;
  @bindable headerTemplate;
  @bindable hidden;
  @bindable lockable;
  @bindable locked;
  @bindable menu;
  @bindable minScreenWidth;
  @bindable sortable;
  @bindable title;
  @bindable values;
  @bindable width;
  template;

  constructor(targetInstruction) {
    this.template = targetInstruction.elementInstruction.template;
  }
}
```

<br>
* * *
#### Next page: &nbsp;&nbsp; [Next actions](#/help/docs/bridge_developers_tutorials/7._next_actions)


