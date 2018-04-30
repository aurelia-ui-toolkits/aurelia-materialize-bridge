export declare class MdFileInput {
    private element;
    constructor(element: Element);
    mdCaption: string;
    mdMultiple: boolean;
    mdLabelValue: string;
    disabled: boolean;
    mdReadonly: boolean;
    filePath: HTMLInputElement;
    files: FileList;
    suspendUpdate: boolean;
    attached(): void;
    detached(): void;
    handleChangeFromNativeInput: () => void;
}
