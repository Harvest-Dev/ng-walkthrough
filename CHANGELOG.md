# Changelog of ng-walkthrough

## V0.6.6 (2018-04-26)

### Correction

- Fix crash on static method with IE11 

## V0.6.5 (2018-04-24)

### Correction

- Fix arrow for IE11 and Safari

## V0.6.4 (2018-04-23)

### Correction

- Fix javascript error in console (#16)

## V0.6.3 (2018-04-19)

### New features

- Add `disabled` attribut on `ng-walkghrough`.
- Add static variable `minimalMargin`on `WalkthroughComponent`

### Correction

- Fix arrow position

## V0.6.1 (2018-04-18)

### Correction

- Fix crash

## V0.6.0 (2018-04-18)

### New features

- `justifyContent` has been renamed `alignContent`
- `finishStep` has been renamed `finishButton`
- Add `verticalAlignContent` attribut
- Add `contentSpacing` and `verticalContentSpacing` attribut

### Breaking changes

- The default attribut for `verticalAlignContent` is `top`,
which means that content is now horizontaly aligned with the top of the focus zone, and not above or below.
If there is not not enough place to place the content that way, it rollbacks to `above` or `below`.

- With `verticalAlignContent` on `top` or `bottom`, the arrow makes a curved line to the side of the content

## V0.5.7 (2018-04-13)

### New features

- Add `marginZone` attribut
- add static methods : `WalkthroughComponent.walkthroughStop()`, `WalkthroughComponent.walkthroughContinue()`, `WalkthroughComponent.walkthroughHasShow()`, `WalkthroughComponent.walkthroughHasPause()`
- add a `WalkthroughEvent` on `finish` and `ready` emitter

## V0.5.6 (2018-02-21)

### Correction

- Fix import

## V0.5.5 (2018-02-05)

### Correction

- Fix CSS for Safari

## V0.5.3 (2018-01-09)

### New features

- add output events `finish` and `ready` on `WalkthroughComponent`
