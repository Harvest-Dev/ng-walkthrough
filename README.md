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

### `ng-walkthrough` attributes

All attributes are optional.

- `id`: HTML id.

**Output events** 
- `ready` : fired when the walkthrough is completely ready

**Focus zone**:
- `focusElementSelector`: CSS selector for focus a HTML element. If the selector detect more that one, the only the first will be chosen.
- `focusElementCSSClass`: Add a class on focusElement (optional)
- `focusHighlightAnimation`: `true` for show highlight animation on the focus element. By defaut `false`.
- `focusBackdrop`: `true` for show a dark backdrop around the focus element. By defaut `false`.
- `focusGlow`: `true` for show a glow on the focus element. By defaut `false`.
- `focusAction`: add an action `click` on the highlight zone.
- `typeSelector`: type of selection. Two modes possible: `element` (one unique HMLT element), `zone` (a zone with contains the first and last element). By defaut : `element`.
- `radius`: apply a “borderRadius” on highlight zone. If `number` the value as change in percent. If `auto` use the focused element borderRadius. If it's a simple `string`, use it without changes. By defaut, no radius.

**Content**:
- `contentTemplate`: add a `ng-template` with your description.
- `contentText`: show a simple description without formating in content.
- `contentStyle`: background style for content container. Possible values: `none`, `darken`. By defaut : `darken`.
- `justifyContent`: align the `contentTemplate`. Possible values: `left`, `center` or `right`. By defaut : `left`.

**Navigation**:
- `previousStep`: add a ling to go to the previous `ng-walkthrough`.
- `nextStep`: add a ling to go to the next `ng-walkthrough`.
- `closeButton`: `true` for show the button. By defaut `false`.
- `closeAnywhere`: `false` for click anywhere to close. By defaut `true`.
- `finishStep`: `true` for show a link to exit. By defaut `false`.
- `texts`: change texts. It's a overlay of `WalkthroughText`.

**Arrow**:
- `showArrow`: `true` for show the arrow. By defaut `false`.
- `arrowColor`: change the arrow color. By defaut `#FFF`.

### `ng-walkthrough-flow` attributes

All attributes are optional and not overriding the subcomponents attributes except `previousStep`, `nextStep` and `finishStep` that will be ignored.

- `id`: HTML id.

**Focus zone**:
- `focusHighlightAnimation`: `true` for show highlight animation on the focus element.
- `focusBackdrop`: `true` for show a dark backdrop around the focus element.
- `focusGlow`: `true` for show a glow on the focus element.
- `radius`: apply a “borderRadius” on highlight zone. If `number` the value as change in percent. If `auto` use the focused element borderRadius. If it's a simple `string`, use it without changes.

**Content**:
- `contentStyle`: background style for content container. Possible values: `none`, `darken`.

**Navigation**:
- `closeButton`: `true` for show the button.
- `closeAnywhere`: `false` for for click anywhere to close.
- `texts`: change texts. It's a overlay of `WalkthroughText`.

**Arrow**:
- `showArrow`: `true` for show the arrow. By defaut `false`.
- `arrowColor`: change the arrow color. By defaut `#FFF`.

### Change texts

It's possible to change all texts. With the `texts`  directive attribute.

```typescript
WalkthroughText {
    previous = 'Previous';
    next     = 'Next';
    close    = 'Close';
}
```

### Example

Highlighting `#selectorId` element with example text in `ng-template`.

```html
<ng-walkthrough
    id="wt-test"
    focusElementSelector="#selectorId"
    focusBackdrop="true"
    [contentTemplate]="template"
    closeButton="true">
    <ng-template #template>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
    </ng-template>
</ng-walkthrough>
```

Example of scenario with `ng-walkthrough-flow`:

```html
<ng-walkthrough-flow #walkFlow
    id="wt-test-flow"
    focusBackdrop="true"
    focusHighlightAnimation="true"
    closeButton="true"
    closeAnywhere="false"
    showArrow="true"
    radius="auto"
    [texts]="frenchText">
    <ng-walkthrough
        id="wt-test1-flow"
        focusElementSelector="#test1"
        [contentText]="Lorem ipsum dolor sit amet, consectetur adipiscing elit...">
    </ng-walkthrough>
    <ng-walkthrough
        id="wt-test2-flow"
        focusElementSelector="#test2"
        [contentText]="Lorem ipsum dolor sit amet, consectetur adipiscing elit...">
    </ng-walkthrough>
    <ng-walkthrough
        id="wt-test3-flow"
        focusElementSelector="#test3"
        closeButton="true"
        [contentText]="Lorem ipsum dolor sit amet, consectetur adipiscing elit...">
    </ng-walkthrough>
</ng-walkthrough-flow>
```

For more examples, see `examples/example.component.html`.

## License

Like Angular, this module is released under the permissive MIT license. Your contributions are always welcome.
