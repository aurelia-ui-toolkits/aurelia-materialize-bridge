declare namespace M {
    interface Tabs {
        updateTabIndicator(): any;
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
