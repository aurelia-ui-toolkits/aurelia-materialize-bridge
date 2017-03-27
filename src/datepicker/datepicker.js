import {bindable, customAttribute} from 'aurelia-templating';
import {bindingMode} from 'aurelia-binding';
import {TaskQueue} from 'aurelia-task-queue';
import {inject} from 'aurelia-dependency-injection';
import {getLogger} from 'aurelia-logging';
import {getBooleanFromAttributeValue} from '../common/attributes';
import {DatePickerDefaultParser} from './datepicker-default-parser';
import {fireEvent} from '../common/events';

@inject(Element, TaskQueue, DatePickerDefaultParser)
@customAttribute('md-datepicker')
export class MdDatePicker {
  @bindable() container;
  @bindable() translation;
  @bindable({defaultBindingMode: bindingMode.twoWay}) value;
  @bindable({defaultBindingMode: bindingMode.twoWay}) parsers = [];
  @bindable({defaultBindingMode: bindingMode.oneTime}) selectMonths = true;
  @bindable({defaultBindingMode: bindingMode.oneTime}) selectYears = 15;
  @bindable({defaultBindingMode: bindingMode.oneTime}) options = {};
  @bindable() showErrortext = true;
  calendarIcon = null;

  constructor(element, taskQueue, defaultParser) {
    this.element = element;
    this.log = getLogger('md-datepicker');
    this.taskQueue = taskQueue;
    this.parsers.push(defaultParser);
    this.onCalendarIconClick = this.onCalendarIconClick.bind(this);
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
      $(this.element).on('keydown', (e)=> {
        if (e.keyCode === 13 || e.keyCode === 9) {
          if (this.parseDate($(this.element).val())) {
            this.closeDatePicker();
          } else {
            this.openDatePicker();
          }
        } else {
          this.value = null;
        }
      });
    } else {
      $(this.element).on('focusin', () => {
        this.openDatePicker();
      });
    }
    if (this.options.showIcon) {
      this.element.classList.add('left');
      this.calendarIcon = document.createElement('i');
      this.calendarIcon.classList.add('right');
      this.calendarIcon.classList.add('material-icons');
      this.calendarIcon.textContent = 'today';
      this.element.parentNode.insertBefore(this.calendarIcon, this.element.nextSibling);
      $(this.calendarIcon).on('click', this.onCalendarIconClick);

      options.iconClass = options.iconClass || 'std-icon-fixup';
      this.calendarIcon.classList.add(options.iconClass);
    }

    this.setErrorTextAttribute();
  }

  parseDate(value) {
    if (this.parsers && this.parsers.length && this.parsers.length > 0) {
      for (const parser of this.parsers) {
        if (parser.canParse(value)) {
          const parsedDate = parser.parse(value);
          if (parsedDate !== null) {
            this.picker.set('select', parsedDate);
            return true;
          }
        }
      }
    }
    return false;
  }

  detached() {
    if (this.options.showIcon) {
      this.element.classList.remove('left');
      $(this.calendarIcon).off('click', this.onCalendarIconClick);
      $(this.calendarIcon).remove();
      this.calendarIcon = null;
    }
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
    fireEvent(this.element, 'blur');
  }

  onCalendarIconClick(event) {
    event.stopPropagation();
    this.openDatePicker();
  }

  onSet(value) {
    //handle this ourselves since Dogfalo removed this functionality from the original plugin
    if (this.options && this.options.closeOnSelect && value.select) {
      this.value = value.select;
      this.picker.close();
    }
    // this.value = new Date(value.select);
  }

  valueChanged(newValue) {
    if (this.options.max && newValue > this.options.max) {
      this.value = this.options.max;
    }
    this.log.debug('selectedChanged', this.value);
    // this.taskQueue.queueTask(() => {
    this.picker.set('select', this.value);
    // });
  }

  showErrortextChanged() {
    this.setErrorTextAttribute();
  }

  setErrorTextAttribute() {
    const element = this.element;
    if (!element) return;
    this.log.debug('showErrortextChanged: ' + this.showErrortext);
    element.setAttribute('data-show-errortext', getBooleanFromAttributeValue(this.showErrortext));
  }
}
