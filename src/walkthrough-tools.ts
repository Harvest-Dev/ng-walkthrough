import { WalkthroughComponent } from './walkthrough.component';

export interface WalkthroughElementCoordinate {
    top: number;
    left: number;
    height: number;
    width: number;
    margin: Margin;
}
export interface Margin {
    top: number;
    left: number;
    right: number;
    bottom: number;
}

export const booleanValue = (value: string | boolean) => {
    return value === 'true' || value === true;
};

export class WalkthroughEvent {
    constructor(
        public component: WalkthroughComponent,
        public focusElement: HTMLElement
    ) { }
}

export class WalkthroughMargin {

    static parsePoints(points: string): WalkthroughMargin {
        let pointsPx: WalkthroughMargin;
        if (points.match(/^\d+(?:\s+\d+)*$/)) {
            const split = points.split(/\s+/).map(i => parseFloat(i));
            pointsPx = new WalkthroughMargin(split[0], split[1], split[2], split[3]);
        }
        return pointsPx || new WalkthroughMargin();
    }

    constructor(
        public top = 0,
        public right?: number,
        public bottom?: number,
        public left?: number,
    ) {
        if (right === undefined) {
            this.right = top;
        }
        if (bottom === undefined) {
            this.bottom = top;
        }
        if (left === undefined && right === undefined) {
            this.left = top;
        } else if (left === undefined) {
            this.left = right;
        }
    }
}
