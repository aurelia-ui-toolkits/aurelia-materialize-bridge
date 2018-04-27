/// <reference types="materialize-css" />
declare namespace M {
    interface Tabs {
        updateTabIndicator(): any;
        _calcRightPos(el: any): any;
    }
    interface DropdownOptions {
        /**
         * Defines the edge the menu is aligned to
         * @default 'left'
         */
        alignment: string;
        /**
         * If true, automatically focus dropdown el for keyboard
         * @default true
         */
        autoTrigger: boolean;
        /**
         * If true, constrainWidth to the size of the dropdown activator
         * @default true
         */
        constrainWidth: boolean;
        /**
         * Provide an element that will be the bounding container of the dropdown
         * @default null
         */
        container: Element;
        /**
         * If false, the dropdown will show below the trigger
         * @default true
         */
        coverTrigger: boolean;
        /**
         * If true, close dropdown on item click
         * @default true
         */
        closeOnClick: boolean;
        /**
         * If true, the dropdown will open on hover
         * @default false
         */
        hover: boolean;
        /**
         * The duration of the transition enter in milliseconds
         * @default 150
         */
        inDuration: number;
        /**
         * The duration of the transition out in milliseconds
         * @default 250
         */
        outDuration: number;
        /**
         * Function called when dropdown starts entering
         * @default null
         */
        onOpenStart: () => void;
        /**
         * Function called when dropdown finishes entering
         * @default null
         */
        onOpenEnd: () => void;
        /**
         * Function called when dropdown starts exiting
         * @default null
         */
        onCloseStart: () => void;
        /**
         * Function called when dropdown finishes exiting
         * @default null
         */
        onCloseEnd: () => void;
    }
    class Dropdown extends Component<DropdownOptions> {
        /**
         * ID of the dropdown element
         */
        id: string;
        /**
         * The DOM element of the dropdown
         */
        dropdownEl: Element;
        /**
         * If the dropdown is open
         */
        isOpen: boolean;
        /**
         * If the dropdown content is scrollable
         */
        isScrollable: boolean;
        /**
         * The index of the item focused
         */
        focusedIndex: number;
        /**
         * Open dropdown
         */
        open(): any;
        /**
         * Close dropdown
         */
        close(): any;
        /**
         * While dropdown is open, you can recalculate its dimensions if its contents have changed
         */
        recalculateDimensions(): any;
    }
    interface FormSelectOptions {
        /**
         * Classes to be added to the select wrapper element
         * @default ''
         */
        classes: string;
        /**
         * Pass options object to select dropdown initialization
         * @default {}
         */
        dropdownOptions: DropdownOptions;
    }
    class FormSelect extends Component<FormSelectOptions> {
        /**
         * If this is a multiple select
         */
        isMultiple: boolean;
        /**
         * The select wrapper element
         */
        wrapper: Element;
        /**
         * Dropdown UL element
         */
        dropdownOptions: HTMLUListElement;
        /**
         * Text input that shows current selected option
         */
        input: HTMLInputElement;
        /**
         * Instance of the dropdown plugin for this select
         */
        dropdown: Dropdown;
        /**
         * Get selected values in an array
         */
        getSelectedValues(): any[];
    }
    interface MaterialboxOptions {
        /**
         * Transition in duration in milliseconds
         * @default 275
         */
        inDuration: number;
        /**
         * Transition out duration in milliseconds
         * @default 200
         */
        outDuration: number;
        /**
         * Callback function called before materialbox is opened
         * @default null
         */
        onOpenStart: (this: Materialbox, el: Element) => void;
        /**
         * Callback function called after materialbox is opened
         * @default null
         */
        onOpenEnd: (this: Materialbox, el: Element) => void;
        /**
         * Callback function called before materialbox is closed
         * @default null
         */
        onCloseStart: (this: Materialbox, el: Element) => void;
        /**
         * Callback function called after materialbox is closed
         * @default null
         */
        onCloseEnd: (this: Materialbox, el: Element) => void;
    }
    class Materialbox extends Component<MaterialboxOptions> {
        /**
         * Open materialbox
         */
        open(): any;
        /**
         * Close materialbox
         */
        close(): any;
    }
}
interface JQuery {
    autocomplete(options: any): any;
    materialbox(): any;
    carousel(command: string): any;
    carousel(options?: any): any;
    characterCounter(): any;
    material_chip(command: string): any;
    material_chip(options?: any): any;
    collapsible(command: string, index?: number): any;
    collapsible(options?: any): any;
    pickadate(options: DatePickerOptions): any;
    pickadate(command: string): any;
    dropdown(command: any): any;
    leanModal(options: any): any;
    parallax(): any;
    pushpin(options: any): any;
    scrollSpy(): any;
    material_select(command?: string): any;
    sideNav(options?: any): any;
    slider(command?: string): any;
    slider(options: any): any;
    tabs(options: any): any;
    tabs(command: string, index: string): any;
    tapTarget(command?: string): any;
    pickatime(command?: string): any;
    pickatime(options: any): any;
    tooltip(command?: string): any;
    tooltip(options: any): any;
    modal(command?: string): any;
    modal(options: any): any;
}
interface DatePickerOptions {
    selectMonths?: boolean;
    selectYears?: number;
    container?: Element;
    editable?: boolean;
    showIcon?: boolean;
    iconClass?: string;
    min?: Date;
    max?: Date;
    onClose?(): any;
}
declare namespace Materialize {
    function updateTextFields(): any;
    function scrollFire(option: any): any;
    function fadeInImage(options: any): any;
    function showStaggeredList(options: any): any;
    interface DropDownOptions {
        closeOnClick?: boolean;
    }
}
declare namespace Waves {
    function attach(element: Element): any;
}
