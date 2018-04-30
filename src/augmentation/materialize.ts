// tslint:disable:max-classes-per-file
// tslint:disable:interface-name
declare namespace M {
	interface Tabs {
		updateTabIndicator();
		_calcRightPos(el);
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
		coverTrigger: boolean;	// If false, the dropdown will show below the trigger.

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
		open();

		/**
		 * Close dropdown
		 */
		close();

		/**
		 * While dropdown is open, you can recalculate its dimensions if its contents have changed
		 */
		recalculateDimensions();
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
		open();

		/**
		 * Close materialbox
		 */
		close();
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
		open();

		/**
		 * Close Tap Target
		 */
		close();
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
		pause();

		/**
		 * Start slider autoslide
		 */
		start();

		/**
		 * Move to next slider
		 */
		next();

		/**
		 * Move to prev slider
		 */
		prev();
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

	function textareaAutoResize(textarea: Element): void;
}

interface JQuery {
	autocomplete(options: any);
	materialbox();
	carousel(command: string);
	carousel(options?: any);
	characterCounter();
	material_chip(command: string);
	material_chip(options?: any);
	collapsible(command: string, index?: number);
	collapsible(options?: any);
	pickadate(options: DatePickerOptions): any;
	pickadate(command: string);
	dropdown(command: any);
	leanModal(options: any);
	parallax();
	pushpin(options: any);
	scrollSpy();
	material_select(command?: string);
	sideNav(options?: any);
	slider(command?: string);
	slider(options: any);
	tabs(options: any);
	tabs(command: string, index: string);
	tapTarget(command?: string);
	pickatime(command?: string);
	pickatime(options: any);
	tooltip(command?: string);
	tooltip(options: any);
	modal(command?: string);
	modal(options: any);
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
	onClose?();
}

declare namespace Materialize {
	function updateTextFields();
	function scrollFire(option: any);
	function fadeInImage(options: any);
	function showStaggeredList(options: any);

	interface DropDownOptions {
		closeOnClick?: boolean;
	}
}

declare namespace Waves {
	function attach(element: Element);
}
