import {bindable, customAttribute} from 'aurelia-templating';
import {bindingMode} from 'aurelia-binding';
import {TaskQueue} from 'aurelia-task-queue';
import {inject} from 'aurelia-dependency-injection';
import {getLogger} from 'aurelia-logging';
import {getBooleanFromAttributeValue} from '../common/attributes';

@inject(Element, TaskQueue)
@customAttribute('md-datepicker')
export class MdDatePicker {
  @bindable() container;
  @bindable() translation;
  @bindable({defaultBindingMode: bindingMode.twoWay}) value;
  @bindable({defaultBindingMode: bindingMode.oneTime}) selectMonths = true;
  @bindable({defaultBindingMode: bindingMode.oneTime}) selectYears = 15;
  @bindable({defaultBindingMode: bindingMode.oneTime}) options = {};

  constructor(element, taskQueue) {
    this.element = element;
    this.log = getLogger('md-datepicker');
    this.taskQueue = taskQueue;
  }

  bind() {
    this.selectMonths = getBooleanFromAttributeValue(this.selectMonths);
    this.selectYears = parseInt(this.selectYears, 10);
    this.element.classList.add('date-picker');

    let options = {
      selectMonths: this.selectMonths,
      selectYears: this.selectYears,
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

    if (this.options) {
      Object.assign(options, this.options);
      //merge callback methods if there is a hook in the advanced options
      if (this.options.onClose) {
        options.onClose = function() {
          this.options.onClose();
          $(document.activeElement).blur();
        };
      }
    }
    if (this.container) {
      options.container = this.container;
    }
    this.picker = $(this.element).pickadate(options).pickadate('picker');
    this.picker.on({
      'close': this.onClose.bind(this),
      'set': this.onSet.bind(this)
    });

    if (this.value) {
      this.picker.set('select', this.value);
    }
    if (this.options && this.options.editable) {
      $(this.element).on('keypress', (e)=> {
        if (e.keyCode === 13) {
          let rawDate = $(this.element).val();
          if (rawDate) {
            rawDate = rawDate.split('/').join('-');
            let parsedDate = new Date(rawDate);
            this.picker.set('select', parsedDate);
          } else {
            this.openDatePicker();
          }
        }
      });
    } else {
      $(this.element).on('focusin', () => {
        this.openDatePicker();
      });
    }
    if (this.options.showIcon) {
      this.element.classList.add('left');
      let calendarIcon = document.createElement('i');
      calendarIcon.classList.add('right');
      calendarIcon.classList.add('material-icons');
      calendarIcon.textContent = 'today';
      this.element.parentNode.insertBefore(calendarIcon, this.element.nextSibling);
      $(calendarIcon).on('click', this.onCalendarIconClick.bind(this));
    }

    this.movePickerCloserToSrc();
  }

  movePickerCloserToSrc(){
    $(this.picker.$root).appendTo( $(this.element).parent());
  }

  detached() {
    if (this.picker) {
      this.picker.stop();
    }
  }

  openDatePicker() {
    $(this.element).pickadate('open');
  }

  closeDatePicker() {
    $(this.element).pickadate('close');
  }

  onClose() {
    let selected = this.picker.get('select');
    this.value = selected ? selected.obj : null;
  }

  onCalendarIconClick(event) {
    event.stopPropagation();
    this.openDatePicker();
  }

  onSet(value) {
    //handle this ourselves since Dogfalo removed this functionality from the original plugin
    if (this.options && this.options.closeOnSelect && value.select) {
      this.picker.close();
    }
    // this.value = new Date(value.select);
  }

  valueChanged(newValue) {
    this.log.debug('selectedChanged', this.value);
    // this.taskQueue.queueTask(() => {
    this.picker.set('select', this.value);
    // });
  }


}
