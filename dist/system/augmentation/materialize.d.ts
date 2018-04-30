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
    interface TapTargetOptions {
        /**
         * Callback function called when Tap Target is opened
         * @default null
         */
        onOpen: (this: TapTarget, origin: Element) => void;
        /**
         * Callback function called when Tap Target is closed
         * @default null
         */
        onClose: (this: TapTarget, origin: Element) => void;
    }
    class TapTarget extends Component<TapTargetOptions> {
        /**
         * Open Tap Target
         */
        open(): any;
        /**
         * Close Tap Target
         */
        close(): any;
    }
    interface SliderOptions {
        /**
         * Callback function called when Tap Target is opened
         * @default Set to false to hide slide indicators
         */
        indicators: boolean;
        /**
         * Set height of slider
         * @default 400
         */
        height: number;
        /**
         * Set the duration of the transition animation in ms
         * @default 500
         */
        duration: number;
        /**
         * Set the duration between transitions in ms
         * @default 6000
         */
        interval: number;
    }
    class Slider extends Component<SliderOptions> {
        /**
         * ID of the dropdown element
         */
        el: Element;
        /**
         * ID of the dropdown element
         */
        options: SliderOptions;
        /**
         * Index of current slide
         */
        activeIndex: number;
        /**
         * Pause slider autoslide
         */
        pause(): any;
        /**
         * Start slider autoslide
         */
        start(): any;
        /**
         * Move to next slider
         */
        next(): any;
        /**
         * Move to prev slider
         */
        prev(): any;
    }
    interface ScrollSpyOptions {
        /**
         * Throttle of scroll handler
         * @default 100
         */
        throttle: number;
        /**
         * Offset for centering element when scrolled to
         * @default 200
         */
        scrollOffset: number;
        /**
         * Class applied to active elements
         * @default 'active'
         */
        activeClass: string;
        /**
         * Used to find active element
         * @default id => 'a[href="#' + id + '"]'
         */
        getActiveElement: (id: string) => string;
    }
    class ScrollSpy extends Component<ScrollSpyOptions> {
    }
    class Range extends Component<undefined> {
    }
    interface PushpinOptions {
        /**
         * The distance in pixels from the top of the page where the element becomes fixed
         * @default 0
         */
        top: number;
        /**
         * The distance in pixels from the top of the page where the elements stops being fixed
         * @default Infinity
         */
        bottom: number;
        /**
         * The offset from the top the element will be fixed at
         * @default 0
         */
        offset: number;
        /**
         * Callback function called when pushpin position changes. You are provided with a position string
         * @default null
         */
        onPositionChange: (this: Pushpin, position: "pinned" | "pin-top" | "pin-bottom") => void;
    }
    class Pushpin extends Component<PushpinOptions> {
        /**
         * Original offsetTop of element
         */
        originalOffset: number;
    }
    interface ParallaxOptions {
        /**
         * The minimum width of the screen, in pixels, where the parallax functionality starts working
         * @default 0
         */
        responsiveThreshold: number;
    }
    class Parallax extends Component<ParallaxOptions> {
    }
    interface CarouselOptions {
        /**
         * Transition duration in milliseconds
         * @default 200
         */
        duration: number;
        /**
         * Perspective zoom. If 0, all items are the same size
         * @default -100
         */
        dist: number;
        /**
         * Set the spacing of the center item
         * @default 0
         */
        shift: number;
        /**
         * Set the padding between non center items
         * @default 0
         */
        padding: number;
        /**
         * Set the number of visible items
         * @default 5
         */
        numVisible: number;
        /**
         * Make the carousel a full width slider like the second example
         * @default false
         */
        fullWidth: boolean;
        /**
         * Set to true to show indicators
         * @default false
         */
        indicators: boolean;
        /**
         * Don't wrap around and cycle through items
         * @default false
         */
        noWrap: boolean;
        /**
         * Callback for when a new slide is cycled to
         * @default null
         */
        onCycleTo: (this: Carousel, current: Element, dragged: Element) => void;
    }
    class Carousel extends Component<CarouselOptions> {
        /**
         * If the carousel is being clicked or tapped
         */
        pressed: boolean;
        /**
         * If the carousel is currently being dragged
         */
        dragged: number;
        /**
         * The index of the center carousel item
         */
        center: number;
        /**
         * Move carousel to next slide or go forward a given amount of slides
         * @param n How many times the carousel slides
         */
        next(n?: number): any;
        /**
         * Move carousel to previous slide or go back a given amount of slides
         * @param n How many times the carousel slides
         */
        prev(n?: number): any;
        /**
         * Move carousel to nth slide
         * @param n Index of slide
         */
        set(n: number): any;
    }
    interface ChipData {
        /**
         * Chip tag
         */
        tag: string;
        /**
         * Chip image
         */
        img?: string;
    }
    interface ChipsOptions {
        /**
         * Set the chip data
         * @default []
         */
        data: ChipData[];
        /**
         * Set first placeholder when there are no tags
         * @default ''
         */
        placeholder: string;
        /**
         * Set second placeholder when adding additional tags
         * @default ''
         */
        secondaryPlaceholder: string;
        /**
         * Set autocomplete options
         * @default {}
         */
        autocompleteOptions: Partial<AutocompleteOptions>;
        /**
         * Set chips limit
         * @default Infinity
         */
        limit: number;
        /**
         * Callback for chip add
         * @default null
         */
        onChipAdd: (this: Chips, element: Element, chip: Element) => void;
        /**
         * Callback for chip select
         * @default null
         */
        onChipSelect: (this: Chips, element: Element, chip: Element) => void;
        /**
         * Callback for chip delete
         * @default null
         */
        onChipDelete: (this: Chips, element: Element, chip: Element) => void;
    }
    class Chips extends Component<ChipsOptions> {
        /**
         * Array of the current chips data
         */
        chipsData: ChipData[];
        /**
         * If the chips has autocomplete enabled
         */
        hasAutocomplete: boolean;
        /**
         * Autocomplete instance, if any
         */
        autocomplete: Autocomplete;
        /**
         * Add chip to input
         * @param data Chip data object
         */
        addChip(chip: any): any;
        /**
         * Delete nth chip
         * @param n  Index of chip
         */
        deleteChip(n?: number): any;
        /**
         * Select nth chip
         * @param n Index of chip`
         */
        selectChip(n: number): any;
    }
    interface ModalOptions {
        /**
         * Prevent page from scrolling while modal is open
         * @default true
         */
        preventScrolling: boolean;
        /**
         * Callback function called before modal is opened
         * @default null
         */
        onOpenStart: (this: Modal, el: Element) => void;
        /**
         * Callback function called after modal is opened
         * @default null
         */
        onOpenEnd: (this: Modal, el: Element) => void;
        /**
         * Callback function called before modal is closed
         * @default null
         */
        onCloseStart: (this: Modal, el: Element) => void;
        /**
         * Callback function called after modal is closed
         * @default null
         */
        onCloseEnd: (this: Modal, el: Element) => void;
    }
    interface CollapsibleOptions {
        /**
         * If accordion versus collapsible
         * @default true
         */
        accordion: boolean;
        /**
         * Transition in duration in milliseconds.
         * @default 250
         */
        inDuration: number;
        /**
         * Transition out duration in milliseconds.
         * @default 250
         */
        outDuration: number;
        /**
         * Callback function called before modal is opened
         * @default null
         */
        onOpenStart: (this: Modal, el: Element) => void;
        /**
         * Callback function called after modal is opened
         * @default null
         */
        onOpenEnd: (this: Modal, el: Element) => void;
        /**
         * Callback function called before modal is closed
         * @default null
         */
        onCloseStart: (this: Modal, el: Element) => void;
        /**
         * Callback function called after modal is closed
         * @default null
         */
        onCloseEnd: (this: Modal, el: Element) => void;
    }
    class Collapsible extends Component<CollapsibleOptions> {
        /**
         * Open collapsible section
         * @param n Nth section to open
         */
        open(n: number): any;
        /**
         * Close collapsible section
         * @param n Nth section to close
         */
        close(n: number): any;
    }
    function textareaAutoResize(textarea: Element): void;
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
