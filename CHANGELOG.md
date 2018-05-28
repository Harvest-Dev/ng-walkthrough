# Changelog of ng-walkthrough

## V0.6.15 (2018-05-28)

### Corrections

- fix case when a step have no `focusElementSelector` (#19)

## V0.6.14 (2018-05-24)

### Corrections

- fix resize code not firing anymore (bug introduced in last release)

## V0.6.13 (2018-05-23)

### Corrections

- fix walkthrough visible while on pause when `window:resize` event is fired

## V0.6.12 (2018-05-04)

### Corrections

- fix crash on IE11 in certain circumstances
- fix issue when using stop/continue container methods outisde of library

## V0.6.11 (2018-05-03)

### Corrections

- Add verifications on `walkthroughContinue` : 
  - check if `focusElementSelector` still exists. If not, we close the walkthrough (without emitting `closed` and `finished` events)
  - otherwise, refresh elements positioning

## V0.6.10 (2018-04-27)

### Corrections

- Fix a bug of positioning while scrolling

## V0.6.9 (2018-04-26)

### Corrections

- Improve content positioning:  
when `verticalAlignContent = top | center | bottom`, if there is enough space on the side but we can't respect the `alignContent center` attribute, we rollback to `left` or `right` (where there is more space)
- Improve scroll positioning

## V0.6.8 (2018-04-26)

### Corrections

- Fix crash on static method with IE11 

## V0.6.5 (2018-04-24)

### Corrections

- Fix arrow for IE11 and Safari

## V0.6.4 (2018-04-23)

### Corrections

- Fix javascript error in console (#16)

## V0.6.3 (2018-04-19)

### New features

- Add `disabled` attribut on `ng-walkghrough`.
- Add static variable `minimalMargin`on `WalkthroughComponent`

### Corrections

- Fix arrow position

## V0.6.1 (2018-04-18)

### Corrections

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

### Corrections

- Fix import

## V0.5.5 (2018-02-05)

### Corrections

- Fix CSS for Safari

## V0.5.3 (2018-01-09)

### New features

- add output events `finish` and `ready` on `WalkthroughComponent`
