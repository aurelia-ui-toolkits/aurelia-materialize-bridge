export declare class MdFileInput {
    private element;
    constructor(element: Element);
    caption: string;
    multiple: boolean;
    labelValue: string;
    disabled: boolean;
    readonly: boolean;
    filePath: HTMLInputElement;
    files: FileList;
    suspendUpdate: boolean;
    attached(): void;
    detached(): void;
    handleChangeFromNativeInput: () => void;
}
