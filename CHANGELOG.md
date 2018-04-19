# Changelog of ng-walkthrough

## V0.6.0

- `justifyContent` has been renamed `alignContent`
- `finishStep` has been renamed `finishButton`
- Add `verticalAlignContent` option
- Add `contentSpacing` and `verticalContentSpacing` option

### Breaking changes

- The default option for `verticalAlignContent` is `top`,
which means that content is now horizontaly aligned with the top of the focus zone, and not above or below.
If there is not not enough place to place the content that way, it rollbacks to `above` or `below`.

- With `verticalAlignContent` on `top` or `bottom`, the arrow makes a curved line to the side of the content

## V0.6.2

- Add `disabled` option on ng-walkghrough.