import { TestBed, waitForAsync } from '@angular/core/testing';

import { WalkthroughModule } from 'angular-walkthrough';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [AppComponent],
                imports: [WalkthroughModule],
            }).compileComponents();
        }),
    );
    it(
        'should create the app',
        waitForAsync(() => {
            const fixture = TestBed.createComponent(AppComponent);
            const app = fixture.debugElement.componentInstance;
            expect(app).toBeTruthy();
        }),
    );
});
