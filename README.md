# Walkthrough

This Angular model is inspired in part by [ng-walkthrough](https://github.com/souly1/ng-walkthrough) for AngularJS.

## Installation

In progress

## Requirements

- Angular 4.0.0 and more
- Angular/cdk 2.0.0-beta.12

## Usage

### Directive Attributes

- `id`  (optional): HTML id
- `focusElementSelector`  (optional): CSS selector for focus a HTML element. If the selector detect more that one, the only the first will be chosen.
- `radius`  (optional): apply a “borderRadius” on highlight zone. If `number` the value as change in percent. If `auto` use the focused element borderRadius. If it's a simple `string`, use it without changes. By defaut, no radius.
- `previousStep`  (optional): add a ling to go to the previous `ng-walkthrough`.
- `nextStep`  (optional): add a ling to go to the next `ng-walkthrough`.
- `texts`  (optional): change texts. It's a overlay of `WalkthroughText`.
- `closeButton`  (optional): `true` for show the button. By defaut `false`.
- `showArrow`  (optional): `true` for show the arrow. By defaut `false`.
- `finishStep`  (optional): `true` for show a link to exit. By defaut `false`.
- `hasBackdrop`  (optional): `true` for show a dark backdrop around the focus element. By defaut `false`.
- `hasGlow`  (optional): `true` for show a glow on the focus element. By defaut `false`.
- `contentTemplate` (optional): add a `ng-template` with your description.

### Change texts

It's possible to change add texts. With the `texts`  directive attribute.

```
WalkthroughText {
    previous = 'Previous';
    next     = 'Next';
    close    = 'Close';
}
```

## License

Like Angular, this module is released under the permissive MIT license. Your contributions are always welcome.
