import { bindable, customAttribute } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';
import { TaskQueue } from 'aurelia-task-queue';
import { inject } from 'aurelia-dependency-injection';
import { getLogger } from 'aurelia-logging';

@inject(Element, TaskQueue)
@customAttribute('md-datepicker')
export class MdDatePicker {
  @bindable() container;
  @bindable() translation;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) value;
  constructor(element, taskQueue) {
    this.element = element;
    this.log = getLogger('md-datepicker');
    this.taskQueue = taskQueue;
  }
  bind() {
    this.element.classList.add('date-picker');
    let options = {
      selectMonths: true,
      selectYears: 15,
      onClose: function() {
        // see https://github.com/Dogfalo/materialize/issues/2067
        // and: https://github.com/amsul/pickadate.js/issues/160
        $(document.activeElement).blur();
        // $(this.element).blur();
      }
    };
    let i18n = {};
    // let i18n = {
    //   selectMonths: true, // Creates a dropdown to control month
    //   selectYears: 15, // Creates a dropdown of 15 years to control year
    //   monthsFull: [ 'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember' ],
    //   monthsShort: [ 'Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez' ],
    //   weekdaysFull: [ 'Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag' ],
    //   weekdaysShort: [ 'So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa' ],
    //   today: 'Heute',
    //   clear: 'Löschen',
    //   close: 'Schließen',
    //   firstDay: 1,
    //   format: 'dddd, dd. mmmm yyyy',
    //   formatSubmit: 'yyyy/mm/dd'
    // };
    Object.assign(options, i18n);
    if (this.container) {
      options.container = this.container;
    }
    this.picker = $(this.element).pickadate(options).pickadate('picker');
    this.picker.on({
      'close': this.onClose.bind(this),
      'set': this.onSet.bind(this)
    });
    $(this.element).on('focusin', () => { $(this.element).pickadate('open'); });
    if (this.value) {
      this.picker.set('select', this.value);
    }
  }

  detached() {
    if (this.picker) {
      this.picker.stop();
    }
  }

  onClose() {
    let selected = this.picker.get('select');
    this.value = selected ? selected.obj : null;
  }

  onSet(value) {
    // this.value = new Date(value.select);
  }

  valueChanged(newValue) {
    this.log.debug('selectedChanged', this.value);
    // this.taskQueue.queueTask(() => {
    this.picker.set('select', this.value);
    // });
  }
}
