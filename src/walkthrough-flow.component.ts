import {
    Component,
    Input,
    ContentChildren,
    QueryList,
    AfterViewInit,
    Output,
    EventEmitter
} from '@angular/core';
import { WalkthroughText } from './walkthrough-text';
import { WalkthroughComponent, booleanValue } from './walkthrough.component';

let nextUniqueId = 0;

@Component({
    selector: 'ng-walkthrough-flow',
    template: ''
})
export class WalkthroughFlowComponent implements AfterViewInit {

    @ContentChildren(WalkthroughComponent) walkthroughComponents: QueryList<WalkthroughComponent>;

    @Input()
    get id() { return this._id; }
    set id(value: string) { this._id = value || this._uid; }

    @Output() closed: EventEmitter<boolean> = new EventEmitter();
    @Output() finished: EventEmitter<void> = new EventEmitter();
    @Input() contentStyle: 'none' | 'draken' = 'draken';

    @Input() arrowColor: string;
    @Input() showArrow: boolean | boolean;

    @Input() closeButton: boolean | boolean;
    @Input() closeAnywhere: boolean | boolean;

    @Input() focusBackdrop: string | boolean;
    @Input() focusGlow: string | boolean;
    @Input() radius: string;

    @Input() texts: WalkthroughText;

    private _id: string;
    private _uid = `walkthrough-flow-${nextUniqueId++}`;

    constructor(
    ) { }

    ngAfterViewInit() {
        setTimeout(() => {
            this.init();
        }, 0);
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
            if (!walkthrough.showArrow && booleanValue(this.showArrow)) {
                walkthrough.showArrow = this.showArrow;
            }
            if (!walkthrough.closeButton && booleanValue(this.closeButton)) {
                walkthrough.closeButton = this.closeButton;
            }
            if (walkthrough.closeAnywhere && !booleanValue(this.closeAnywhere)) {
                walkthrough.closeAnywhere = this.closeAnywhere;
            }
            if (!walkthrough.focusBackdrop && booleanValue(this.focusBackdrop)) {
                walkthrough.focusBackdrop = this.focusBackdrop;
            }
            if (!walkthrough.focusGlow && booleanValue(this.focusGlow)) {
                walkthrough.focusGlow = this.focusGlow;
            }
            if (!walkthrough.radius && this.radius) {
                walkthrough.radius = this.radius;
            }
            if (!walkthrough.texts && this.texts) {
                walkthrough.texts = this.texts;
            }

        });
        // navigation auto (close on last step)
        prevComp.finishStep = true;
    }

    start() {
        this.walkthroughComponents.first.open();
    }
}
