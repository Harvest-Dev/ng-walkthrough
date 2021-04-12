import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';

import {
    WalkthroughComponent, WalkthroughContainerComponent, WalkthroughEvent, WalkthroughNavigate, WalkthroughTextI
} from 'projects/angular-walkthrough/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  frenchText: WalkthroughTextI = {
    previous: 'Précédent',
    next: 'Suivant',
    close: 'Fermer'
  };

  testClickCount = 0;
  testClickTexts = ['click me', 'it\'s ok!', 'realy ok', 'ok ok...', 'stop that!'];
  testPosition = 'center';
  alignContent = 'left';
  verticalAlignContent = 'top';
  valignHeight = '600px';
  contentSpacing = 200;
  verticalContentSpacing = 50;

  @ViewChild('walk1') walk1: WalkthroughComponent;

  // disabled flags
  step1flowDisabled = false;
  step2flowDisabled = false;
  step3flowDisabled = false;
  step4flowDisabled = false;

  hideCount = 3;
  private _count = 3;
  private _start = false;

  get isMobile(): boolean {
    return window.innerWidth < 768;
  }

  private _listener: Subscription[] = [];

  constructor() {
    this._listener.push(
      WalkthroughComponent.onOpen.subscribe((compt: WalkthroughComponent) => {
        console.group('open');
        console.log('onOpen:', compt.id);
        console.groupEnd();
      }),
      WalkthroughComponent.onClose.subscribe((compt: WalkthroughComponent) => {
        console.group('close');
        console.log('onClose:', compt.id);
        console.groupEnd();
      }),
      WalkthroughComponent.onFinish.subscribe((compt: WalkthroughComponent) => {
        console.group('finish (close on the last step)');
        console.log('onFinish:', compt.id);
        console.groupEnd();
      }),
      WalkthroughComponent.onRefresh.subscribe((compt: WalkthroughComponent) => {
        console.group('refresh');
        console.log('onRefresh:', compt.id);
        console.groupEnd();
      }),
      WalkthroughComponent.onNavigate.subscribe((compt: WalkthroughNavigate) => {
        console.group('navigate');
        console.log('onNavigate:', compt.previous.id, '→', compt.next.id);
      }),
      WalkthroughComponent.onNavigateNext.subscribe((compt: WalkthroughNavigate) => {
        console.log('onNavigateNext:', compt.previous.id, '→', compt.next.id);
        console.groupEnd();
      }),
      WalkthroughComponent.onNavigatePrevious.subscribe((compt: WalkthroughNavigate) => {
        console.log('onNavigatePrevious:', compt.previous.id, '→', compt.next.id);
        console.groupEnd();
      })
    );
  }

  ngOnInit() {
    // for test: onContainerInit
    // this.walk1.open();
  }

  buttonAction() {
    if (this.testClickCount < this.testClickTexts.length - 1) {
      this.testClickCount++;
    }
  }

  focusClickAction(event: Event, contenaire: WalkthroughContainerComponent) {
    contenaire.next();
  }

  walk3IsReady(event: WalkthroughEvent) {
    // tslint:disable-next-line:no-console
    console.log('walk3IsReady', event);
    setTimeout(() => {
      event.component.arrowColor = 'red';
    }, 1000);
    setTimeout(() => {
      event.component.arrowColor = 'blue';
    }, 2000);
    setTimeout(() => {
      event.component.arrowColor = 'yellow';
    }, 3000);
  }

  hideWalkthrough() {
    if (this.hideCount === this._count && !this._start) {
      this._start = true;
      const int = setInterval(() => {
        this.hideCount--;
        if (this.hideCount === 0) {
          clearInterval(int);
          if (WalkthroughComponent.walkthroughHasShow() && !WalkthroughComponent.walkthroughHasPause()) {
            WalkthroughComponent.walkthroughStop();
          } else {
            console.warn('Not walkthrough showing');
            this._start = false;
            this.hideCount = this._count;
          }
        }
      }, 1000);
    } else if (this.hideCount === 0) {
      this._start = false;
      this.hideCount = this._count;
      WalkthroughComponent.walkthroughContinue();
    }
  }

  walk1Closed(finishButton: boolean) {
    // tslint:disable-next-line:no-console
    console.log('walk1 has been closed with value : ' + (finishButton ? 'true' : 'false'));
  }

  walk1Finished() {
    // tslint:disable-next-line:no-console
    console.log('walk1 has been finished');
  }

  flowClosed(finishButton: boolean) {
    // tslint:disable-next-line:no-console
    console.log('flow has been closed with value : ' + (finishButton ? 'true' : 'false'));
  }

  flowFinished() {
    // tslint:disable-next-line:no-console
    console.log('flow has been finished');
  }

  pause() {
    WalkthroughComponent.walkthroughStop();
  }

  continue() {
    WalkthroughComponent.walkthroughContinue();
  }

  rename() {
    const list: any = document.querySelectorAll('.rename');
    list.forEach((elt: HTMLElement) => {
      if (elt.id.endsWith('-rename')) {
        elt.id = elt.id.replace('-rename', '');
      } else {
        elt.id += '-rename';
      }
    });
  }

  ngOnDestroy(): void {
    for (const list of this._listener) {
      list.unsubscribe();
    }
  }
}
