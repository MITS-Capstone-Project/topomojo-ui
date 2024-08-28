export interface ConsoleSupportsFeatures {
    syncResolution: boolean;
    virtualKeyboard: boolean;
}

export interface ConsoleOptions {
    canvasId: string;
    changeResolution?: boolean;
    ticket: string;
    viewOnly: boolean;
}
