export declare class MdToastService {
    removeAll(): void;
    show(html: string, displayLength?: number, className?: string, activationPercent?: number, inDuration?: number, outDuration?: number): Promise<M.Toast>;
}
