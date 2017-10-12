[![npm version](https://badge.fury.io/js/angular-walkthrough.svg)](https://badge.fury.io/js/angular-walkthrough) [![Downloads](https://img.shields.io/npm/dm/angular-walkthrough.svg)](https://www.npmjs.com/package/angular-walkthrough) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/Zefling/ng-walkthrough/master/LICENSE.md)

# Walkthrough

This Angular model is inspired in part by [ng-walkthrough](https://github.com/souly1/ng-walkthrough) for AngularJS.

## Installation

```
npm install angular-walkthrough
```

## Requirements

- Angular 4.0.0 and more
- Angular/cdk 2.0.0-beta.12

## Demo

[See a demo](https://zefling.github.io/ng-walkthrough/demo/).

## Usage

### Directive Attributes

- `id` (optional): HTML id
- `focusElementSelector` (optional): CSS selector for focus a HTML element. If the selector detect more that one, the only the first will be chosen.
- `typeSelector` (optional): Type of selection. Two modes possible: `element` (one unique HMLT element), `zone` (a zone with contains the first and last element). By defaut : `element`.
- `radius` (optional): apply a “borderRadius” on highlight zone. If `number` the value as change in percent. If `auto` use the focused element borderRadius. If it's a simple `string`, use it without changes. By defaut, no radius.
- `previousStep` (optional): add a ling to go to the previous `ng-walkthrough`.
- `nextStep` (optional): add a ling to go to the next `ng-walkthrough`.
- `texts` (optional): change texts. It's a overlay of `WalkthroughText`.
- `closeButton` (optional): `true` for show the button. By defaut `false`.
- `closeAnywhere` (optional): click anywhere to close. By defaut `true`.
- `showArrow` (optional): `true` for show the arrow. By defaut `false`.
- `arrowColor` (optional): change the arrow color. By defaut `#FFF`.
- `finishStep` (optional): `true` for show a link to exit. By defaut `false`.
- `hasBackdrop` (optional): `true` for show a dark backdrop around the focus element. By defaut `false`.
- `hasGlow` (optional): `true` for show a glow on the focus element. By defaut `false`.
- `contentTemplate` (optional): add a `ng-template` with your description.
- `justifyContent` (optional): align the `contentTemplate`. Possible values: `left`, `center` or `right`. By defaut : `left`
- `contentStyle` (optional): background style for content container. Possible values: `none`, `darken`. By defaut : `darken`

### Change texts

It's possible to change all texts. With the `texts`  directive attribute.

```
WalkthroughText {
    previous = 'Previous';
    next     = 'Next';
    close    = 'Close';
}
```

### Example

Highlighting `#selectorId` element with example text in `ng-template`.

```
<ng-walkthrough
    id="wt-test"
    focusElementSelector="#selectorId"
    hasBackdrop="true"
    [contentTemplate]="template"
    closeButton="true">
    <ng-template #template>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
    </ng-template>
</ng-walkthrough>
```

## License

Like Angular, this module is released under the permissive MIT license. Your contributions are always welcome.
