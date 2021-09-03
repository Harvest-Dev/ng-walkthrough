import {
    AfterViewInit, Component, ContentChildren, EventEmitter, Input, Output, QueryList, OnChanges, SimpleChanges
} from '@angular/core';

import { WalkthroughTextI } from './walkthrough-text';
import { booleanValue, WalkthroughEvent } from './walkthrough-tools';
import { WalkthroughComponent } from './walkthrough.component';

let nextUniqueId = 0;

@Component({
    selector: 'ng-walkthrough-flow',
    template: '',
})
export class WalkthroughFlowComponent implements AfterViewInit, OnChanges {
    @ContentChildren(WalkthroughComponent) walkthroughComponents: QueryList<WalkthroughComponent>;

    @Input()
    get id() {
        return this._id;
    }
    set id(value: string) {
        this._id = value || this._uid;
    }

    @Output() closed: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() finished: EventEmitter<WalkthroughEvent> = new EventEmitter();
    @Input() contentStyle: 'none' | 'draken' = 'draken';

    @Input() arrowColor: string;
    @Input() marginZone: string | null = null;
    @Input() showArrow: string | boolean;

    @Input() rootElement: string;

    @Input() closeButton: string | boolean;
    @Input() closeAnywhere: string | boolean;
    @Input() finishButton: string | boolean;
    @Input() hidePrevious: string | boolean;

    @Input() focusBackdrop: string | boolean;
    @Input() focusGlow: string | boolean;
    @Input() radius: string;

    @Input() notScrollOnResize: string | boolean;

    @Input() texts: WalkthroughTextI;

    private _id: string;
    private _uid = `walkthrough-flow-${nextUniqueId++}`;

    constructor() {}

    ngAfterViewInit() {
        setTimeout(() => {
            this.init();
        });
    }

    ngOnChanges(changes: SimpleChanges) {
        if (this.walkthroughComponents && changes) {
            for (const option in changes) {
                if (changes[option] && option !== 'id') {
                    this.walkthroughComponents.forEach((walkthrough: WalkthroughComponent) => {
                        walkthrough[option] = changes[option].currentValue;
                    });
                }
            }
        }
    }

    init() {
        let prevComp: WalkthroughComponent = null;
        this.walkthroughComponents.forEach((walkthrough: WalkthroughComponent) => {
            // navigation auto (ignore previousStep/nextStep on the WalkthroughComponent)

            if (prevComp) {
                walkthrough.previousStep = prevComp;
                prevComp.nextStep = walkthrough;
            }
            prevComp = walkthrough;

            // transmition (only if different from default)

            if (this.closed) {
                walkthrough.closed = this.closed;
            }
            if (this.finished) {
                walkthrough.finished = this.finished;
            }
            if (!walkthrough.contentStyle && this.contentStyle) {
                walkthrough.contentStyle = this.contentStyle;
            }
            if (!walkthrough.arrowColor && this.arrowColor) {
                walkthrough.arrowColor = this.arrowColor;
            }
            if (!walkthrough.marginZone && this.marginZone) {
                walkthrough.marginZone = this.marginZone;
            }
            if (!walkthrough.showArrow && booleanValue(this.showArrow)) {
                walkthrough.showArrow = this.showArrow;
            }
            if (!walkthrough.rootElement && this.rootElement) {
                walkthrough.rootElement = this.rootElement;
            }
            if (!walkthrough.closeButton && booleanValue(this.closeButton)) {
                walkthrough.closeButton = this.closeButton;
            }
            if (walkthrough.closeAnywhere && !booleanValue(this.closeAnywhere)) {
                walkthrough.closeAnywhere = this.closeAnywhere;
            }
            if (!walkthrough.finishButton && booleanValue(this.finishButton)) {
                walkthrough.finishButton = this.finishButton;
            }
            if (!walkthrough.hidePrevious && booleanValue(this.hidePrevious)) {
                walkthrough.hidePrevious = this.hidePrevious;
            }
            if (!walkthrough.focusBackdrop && booleanValue(this.focusBackdrop)) {
                walkthrough.focusBackdrop = this.focusBackdrop;
            }
            if (!walkthrough.focusGlow && booleanValue(this.focusGlow)) {
                walkthrough.focusGlow = this.focusGlow;
            }
            if (!walkthrough.notScrollOnResize && booleanValue(this.notScrollOnResize)) {
                walkthrough.notScrollOnResize = this.notScrollOnResize;
            }
            if (!walkthrough.radius && this.radius) {
                walkthrough.radius = this.radius;
            }
            if (!walkthrough.texts && this.texts) {
                walkthrough.texts = this.texts;
            }
        });
        // navigation auto (close on last step)
        prevComp.finishButton = true;
    }

    start() {
        this.walkthroughComponents.first.open();
    }
}
