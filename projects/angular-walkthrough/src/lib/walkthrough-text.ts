export interface WalkthroughTextI {
    previous?: string;
    next?: string;
    close?: string;
}

export class WalkthroughText implements WalkthroughTextI {
    previous = 'Previous';
    next = 'Next';
    close = 'Close';
}
