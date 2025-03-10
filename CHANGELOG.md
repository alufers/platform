# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [13.0.4](https://github.com/alufers/platform/compare/v13.0.3...v13.0.4) (2022-09-26)

### Bug Fixes

- fixup imports pointing to old packages ([34955ec](https://github.com/alufers/platform/commit/34955ec))

## [13.0.3](https://github.com/alufers/platform/compare/v13.0.2...v13.0.3) (2022-09-26)

**Note:** Version bump only for package platform

## [13.0.2](https://github.com/alufers/platform/compare/v13.0.1...v13.0.2) (2022-09-26)

### Bug Fixes

- fix tests ([4244429](https://github.com/alufers/platform/commit/4244429))

## [13.0.1](https://github.com/alufers/platform/compare/v13.0.0...v13.0.1) (2022-08-25)

**Note:** Version bump only for package platform

# 13.0.0 (2022-08-25)

### Bug Fixes

- add typescript unused checks ([#32](https://github.com/alufers/platform/issues/32)) ([65c4229](https://github.com/alufers/platform/commit/65c4229))
- canary release auto approve ([#80](https://github.com/alufers/platform/issues/80)) ([e888aa5](https://github.com/alufers/platform/commit/e888aa5))
- external tslint running on library source code ([#35](https://github.com/alufers/platform/issues/35)) ([d6c6745](https://github.com/alufers/platform/commit/d6c6745))
- lerna config again ([39fee80](https://github.com/alufers/platform/commit/39fee80))
- reactive forms not updating on changes in store ([#41](https://github.com/alufers/platform/issues/41)) ([bd87846](https://github.com/alufers/platform/commit/bd87846))
- remove git signing ([547ae25](https://github.com/alufers/platform/commit/547ae25))
- rm WeakMap, we can't use it for key with type string ([#15](https://github.com/alufers/platform/issues/15)) ([6a9bdc2](https://github.com/alufers/platform/commit/6a9bdc2))
- typings entry point and failing definitions ([#36](https://github.com/alufers/platform/issues/36)) ([ae0373d](https://github.com/alufers/platform/commit/ae0373d))
- update peer dependencies from ^9.0.0 to ^10.0.0 ([#87](https://github.com/alufers/platform/issues/87)) ([fcea502](https://github.com/alufers/platform/commit/fcea502))
- versions ([d6b7003](https://github.com/alufers/platform/commit/d6b7003))
- versions again ([97fab20](https://github.com/alufers/platform/commit/97fab20))
- **build:** No chai for you ([#209](https://github.com/alufers/platform/issues/209)) ([be35f03](https://github.com/alufers/platform/commit/be35f03))
- **ci:** fix canary release not working with yarn ([#62](https://github.com/alufers/platform/issues/62)) ([90564d3](https://github.com/alufers/platform/commit/90564d3))
- **deps:** Change zone.js version ([#222](https://github.com/alufers/platform/issues/222)) ([e62e149](https://github.com/alufers/platform/commit/e62e149))
- **example:** Fix local dev mode ([#80](https://github.com/alufers/platform/issues/80)) ([#81](https://github.com/alufers/platform/issues/81)) ([b06721f](https://github.com/alufers/platform/commit/b06721f))
- **form:** connect formGroup input not mapped to connect base ([#94](https://github.com/alufers/platform/issues/94)) ([9d1d6db](https://github.com/alufers/platform/commit/9d1d6db)), closes [#85](https://github.com/alufers/platform/issues/85)
- **ngReduxModule:** Generate metadata ([#237](https://github.com/alufers/platform/issues/237)) ([8b4b9d8](https://github.com/alufers/platform/commit/8b4b9d8))
- **package.json:** add redux as dependencies ([#132](https://github.com/alufers/platform/issues/132)) ([5fdeb19](https://github.com/alufers/platform/commit/5fdeb19))

### chore

- **build:** use ng-packagr ([#37](https://github.com/alufers/platform/issues/37)) ([dffe23a](https://github.com/alufers/platform/commit/dffe23a)), closes [#9](https://github.com/alufers/platform/issues/9)
- **linting:** add global tslint rules ([#35](https://github.com/alufers/platform/issues/35)) ([336cc60](https://github.com/alufers/platform/commit/336cc60)), closes [#4](https://github.com/alufers/platform/issues/4)

### Features

- add new devtools window prop name ([#58](https://github.com/alufers/platform/issues/58)) ([55b15a6](https://github.com/alufers/platform/commit/55b15a6))
- add peer dep support for Angular 5 ([#51](https://github.com/alufers/platform/issues/51)) ([13b4cb8](https://github.com/alufers/platform/commit/13b4cb8))
- Introduced a new function called provideStore() which accepts a already created Redux store ([#142](https://github.com/alufers/platform/issues/142)) ([a6c4aaf](https://github.com/alufers/platform/commit/a6c4aaf)), closes [#141](https://github.com/alufers/platform/issues/141)
- split directives into separate modules ([#37](https://github.com/alufers/platform/issues/37)) ([6250ea8](https://github.com/alufers/platform/commit/6250ea8))
- upgrade to angular 7 ([#72](https://github.com/alufers/platform/issues/72)) ([18d9245](https://github.com/alufers/platform/commit/18d9245)), closes [#65](https://github.com/alufers/platform/issues/65) [#66](https://github.com/alufers/platform/issues/66) [#67](https://github.com/alufers/platform/issues/67) [#68](https://github.com/alufers/platform/issues/68) [#69](https://github.com/alufers/platform/issues/69) [#70](https://github.com/alufers/platform/issues/70) [#71](https://github.com/alufers/platform/issues/71) [#74](https://github.com/alufers/platform/issues/74) [#79](https://github.com/alufers/platform/issues/79)
- Typescript Port ([#33](https://github.com/alufers/platform/issues/33)) ([33ea991](https://github.com/alufers/platform/commit/33ea991)), closes [#35](https://github.com/alufers/platform/issues/35) [#36](https://github.com/alufers/platform/issues/36) [#37](https://github.com/alufers/platform/issues/37) [#38](https://github.com/alufers/platform/issues/38) [#39](https://github.com/alufers/platform/issues/39) [#52](https://github.com/alufers/platform/issues/52) [#50](https://github.com/alufers/platform/issues/50) [#55](https://github.com/alufers/platform/issues/55) [#53](https://github.com/alufers/platform/issues/53)
- **aot:** Support AoT - [#223](https://github.com/alufers/platform/issues/223) ([#226](https://github.com/alufers/platform/issues/226)) ([a6d7826](https://github.com/alufers/platform/commit/a6d7826))
- **dispatch:** Create dispatch decorator ([#385](https://github.com/alufers/platform/issues/385)) ([4513566](https://github.com/alufers/platform/commit/4513566))

### BREAKING CHANGES

- Upgrades Angular dependencies to v7
- **build:** - changes the output to conform to the Angular Package Format. This may cause subtle differences in consumption behaviour

* peer dependencies have been corrected to actual dependencies

- **linting:** - ConnectArray has been renamed to ConnectArrayDirective

* ReactiveConnect has been renamed to ReactiveConnectDirective
* Connect has been renamed to ConnectDirective
* interfaces with an "I" prefix have had that prefix removed (e.g "IAppStore" -> "AppStore")

# [10.0.0](https://github.com/angular-redux/platform/compare/v9.0.1...v10.0.0) (2019-05-04)

### Bug Fixes

- **ci:** fix canary release not working with yarn ([#62](https://github.com/angular-redux/platform/issues/62)) ([90564d3](https://github.com/angular-redux/platform/commit/90564d3))
- canary release auto approve ([#80](https://github.com/angular-redux/platform/issues/80)) ([e888aa5](https://github.com/angular-redux/platform/commit/e888aa5))

### chore

- **build:** use ng-packagr ([#37](https://github.com/angular-redux/platform/issues/37)) ([dffe23a](https://github.com/angular-redux/platform/commit/dffe23a)), closes [#9](https://github.com/angular-redux/platform/issues/9)
- **linting:** add global tslint rules ([#35](https://github.com/angular-redux/platform/issues/35)) ([336cc60](https://github.com/angular-redux/platform/commit/336cc60)), closes [#4](https://github.com/angular-redux/platform/issues/4)

### Features

- add new devtools window prop name ([#58](https://github.com/angular-redux/platform/issues/58)) ([55b15a6](https://github.com/angular-redux/platform/commit/55b15a6))
- upgrade to angular 7 ([#72](https://github.com/angular-redux/platform/issues/72)) ([18d9245](https://github.com/angular-redux/platform/commit/18d9245)), closes [#65](https://github.com/angular-redux/platform/issues/65) [#66](https://github.com/angular-redux/platform/issues/66) [#67](https://github.com/angular-redux/platform/issues/67) [#68](https://github.com/angular-redux/platform/issues/68) [#69](https://github.com/angular-redux/platform/issues/69) [#70](https://github.com/angular-redux/platform/issues/70) [#71](https://github.com/angular-redux/platform/issues/71) [#74](https://github.com/angular-redux/platform/issues/74) [#79](https://github.com/angular-redux/platform/issues/79)

### BREAKING CHANGES

- Upgrades Angular dependencies to v7
- **build:** - changes the output to conform to the Angular Package Format. This may cause subtle differences in consumption behaviour

* peer dependencies have been corrected to actual dependencies

- **linting:** - ConnectArray has been renamed to ConnectArrayDirective

* ReactiveConnect has been renamed to ReactiveConnectDirective
* Connect has been renamed to ConnectDirective
* interfaces with an "I" prefix have had that prefix removed (e.g "IAppStore" -> "AppStore")

# 9.0.0

## Breaking Changes

- Updates to Redux 4 typedefs.
- Updates to RxJs 6 import paths.
- Updates to Angular 6.

# 7.1.1

## Bug Fixes

- #508 (thanks to @ratoaq2)
- #463 (thanks to @draccoz)

# 7.1.0

## Features

- Add a way to return a false value from a method decorated with `@dispatch` to allow conditionally preventing a dispatch. [PR#497](https://github.com/angular-redux/store/pull/497)

```ts
@dispatch()
selectTab(tab) {
 return this.active.id !== tab.id ? { type: .... } : false;
}
```

- Add a way to access the decorated instance inside of transformer for `@select$` [PR#500](https://github.com/angular-redux/store/pull/500)

```ts
@Input() public anotherInput: string;

@select$(['selector'], (obs$, inst) => obs$.filter(x => x.name === inst.anotherInput))
public selectedObs: Observable<any>;
```

Shout out to contributors:

- [@rart](https://github.com/rart)
- [@MaKCbIMKo](https://github.com/MaKCbIMKo)

# 7.0.2 - Fixing Publish

- There are no functional changes / fixes in this release.

There was accidental publish to the `@latest` tag with an experimental fix for the v6 branch that got pushed out with the incorrect tag.

For some clarity:

- v7+ - currently only works with Angular 5+
- v6+ - works with Angular 4 and earlier, and v5.
- v8 - this was an accidental version bump - and that package is now deprecated.

# Which Version to use?

## Angular 5+

Use `@angular-redux/store@^7` - this version supports Angular 5, and also changes to using lettable operators.

Any new major releases will released on the v7 branch and with the `@latest` tag for final publishes.

## Angular 4 or lower

Use `@angular-redux/store@^6` - This supports Angular 4 and earlier.

# Support for `@angular-redux/store@6`?

Where possible, I will be maintaining and applying any fixes / enhancements for v7 into v6 where it does not introduce a breaking change.

I made a few mistakes trying to publish fixes / etc to two major versions, which caused some releases to get tagged incorrectly and caused some confusion. Sorry for any confusion this has caused, and will do better on avoiding this in the future, and being more transparent with the releases that are going out.

# 6.6.0 - Angular 5 Support

- Add Angular 5+ as peer dependency

# 7.0.0 - Angular 5 Upgrade

- Update dependencies to Angular 5
- Update RxJS to 5.5.2 and use lettable operators
- Update peer dependencies to only Angular 5+

note: This version requires Angular 5, the code generated by the compiler is not compatible with Angular v4.

# 6.6.0-1

- Update peer dependency to include Angular 5, _note_ - this is a beta release, if you run into any issues with Angular 5 please let me know. This release is still using an older version of angular to build / compile, but seems to work with Angular 5.

Working on a V7 release that upgrades to be built/use Angular 5 core/compiler/etc which produces builds that are not backwards compatable with Angular 4. More details will be available soon.

# 6.5.7

- Fixed issue with AppRef.tick being called recurisvly [#443](https://github.com/angular-redux/store/pull/443)

# 6.5.6

- Turn tsconfig checks to 11.
- Minor code cleanup - no feature changes.

# 6.5.5

- Update toolchain to typescript 2.4.
- Fix for https://github.com/angular-redux/store/issues/434.

# 6.5.4

- Fix for https://github.com/angular-redux/store/issues/427: memory leaks introduced in 6.3.0.

** You'll want to grab this update! **

# 6.5.3

- Handle `@WithSubStore`, `.configureSubStore` boundary cases for when the base path
  doesn't exist in the store yet.

# 6.5.2

- Docgen updates.

# 6.5.1

- Allow `@WithSubStore`'s base path to be dynamic.

# 6.5.0

- Enabled fractal store features for the decorator interface. See
  https://github.com/angular-redux/store/blob/master/articles/fractal-store.md for details.

# 6.4.5

- Fix a boundary condition where `MockNgRedux` could get instantiated
  twice under certain conditions.
- Adjust exposed interfaces of `MockNgRedux` and `NgRedux` to make them
  structurally compatible (both assignable to the `NgRedux` type) (issue #419)
- Update to TypeScript 2.3.4

# 6.4.4

- Improve packaging of `testing` submodule for people working in strict mode (thanks @ialibhay)!

# 6.4.3

- Reset `MockNgRedux.mockInstance` as part of `MockNgRedux.reset()`.

# 6.4.2

- Fixed some issues with MockNgRedux and the select dectorators. See https://github.com/angular-redux/store/issues/413 for details.

# 6.4.1

- Fixed a memory leak with `@select`, `@select$`. See https://github.com/angular-redux/example-app/issues/34 for details.

# 6.4.0

## Features

- Added 'fractal store' support.

You can now create an encapsulated 'sub-store' that only operates on a section of the global Redux store:

```typescript
const subStore = ngRedux.configureSubStore(
  ['path', 'to', 'somewhere'],
  localReducer,
);
```

Substore has the same interface as `NgRedux`: `select`, `dispatch` etc;
however when these functions are called on a substore instance, they
are scoped to the data under `path.to.somewhere`.

See [the docs](https://github.com/angular-redux/store/blob/master/articles/fractal-store.md) for more info.

# 6.3.0

## Fixes

- Fixed issues with middlewares that allow dispatching of things other than just raw actions
  (e.g. redux-thunk) [#386, #264].
- Fixed issues with enhancers that change the way `Store.subscribe` and listeners work (e.g. redux-batch) [#372]

## Features

- Added the `@select$` decorator which allows you to attach observable operator chains
  directly to `@select`. For example:

```typescript
import { select$ } from 'angular-redux/store';

export const debounceAndTriple = (obs$) => obs$.debounce(300).map((x) => 3 * x);

class Foo {
  @select$(['foo', 'bar'], debounceAndTriple)
  readonly debouncedFooBar$: Observable<number>;
}
```

- Added the `@dispatch` decorator which allows auto-dispatch for your action creators.
  For example:

```typescript
import { Injectable } from '@angular/core';
import { Action } from 'redux';

@Injectable()
export class AnimalActions {
  static readonly LOAD_ANIMALS = 'LOAD_ANIMALS';

  // Calling loadAnimals will now automagically dispatch the action.
  @dispatch()
  loadAnimals = (animalType: AnimalType): Action => ({
    type: AnimalActions.LOAD_ANIMALS,
    meta: { animalType },
  });

  // ...
}
```

# 6.2.2

- Reset `MockNgRedux.mockInstance` as part of `MockNgRedux.reset()`.

# 6.2.1

## Fixes

Issue #370

## Misc.

- More code cleanup
- Auto-generated API documentation.

# 6.2.0 - NgReduxTestingModule

## Features

- Added `NgReduxTestingModule`, `MockNgRedux` to help unit test components and
  services that select from the store. See [here](https://github.com/angular-redux/store/blob/master/articles/intro-tutorial.md#unit-testing-selections)
  for details.
- Expose `PathSelector`, `FunctionSelector`, and `PropertySelector` types in `index.d.ts`.

## Misc.

- Simplified build toolchain
- Simplified unit testing toolchain
- Consolidated repo-specific examples in to the [example-app](https://github.com/angular-redux/example-app) repo.

# 6.1.0 - Angular 4 Support

Both version 2 and 4 of Angular are now supported. However Angular 2 support
is deprecated and will be removed in the next major version.

# 6.0.1

Documentation updates; no code change. Added a 'getting started' tutorial.

# 6.0.0 - The big-rename.

Due to the impending release of Angular4, the name 'ng2-redux' no longer makes
a ton of sense. The Angular folks have moved to a model where all versions are
just called 'Angular', and we should match that.

After discussion with the other maintainers, we decided that since we have to
rename things anyway, this is a good opportunity to collect ng2-redux and its
related libraries into a set of scoped packages. This will allow us to grow
the feature set in a coherent but decoupled way.

As of v6, the following packages are deprecated:

- ng2-redux
- ng2-redux-router
- ng2-redux-form

Those packages will still be available on npm for as long as they are being used.

However we have published the same code under a new package naming scheme:

- @angular-redux/store (formerly ng2-redux)
- @angular-redux/router (formerly ng2-redux-router)
- @angular-redux/form (formerly ng2-redux-form).

We have also decided that it's easier to reason about things if these packages
align at least on major versions. So everything has at this point been bumped
to 6.0.0.

# Breaking changes

Apart from the rename, the following API changes are noted:

- @angular-redux/store: none.
- @angular-redux/router: none.
- @angular-redux/form: `NgReduxForms` renamed to `NgReduxFormModule` for consistency.

# 5.1.1

# 4.2.4

# 3.3.10

### Fixes

Applied fix addressing #309 - select function called even if state does not change.

# 5.1.0

### Features

You can now get an observable to the root state by passing no arguments to
`ngRedux.select`:

```typescript
private this.rootState$: Observable<IAppState>;

constructor(ngRedux: NgRedux) {
  this.rootState$ = ngRedux.select();
}
```

### Changes

`ngRedux.dispatch()` has been tweaked to always run in the Angular zone. This
should prevent unexpected weirdness when dispatching from callbacks to 3rd-party
libraries. See #259 for further discussion.

### Misc.

- Refactored the example app a bit to split out the different selector demos instead
  of lumping most of them into the counter component.
- Miscellaneous documentation updates.

# 5.0.0

- Fix for the `ERROR in NgReduxModule is not an NgModule` error thrown by Angular CLI.
- Remove deprecations.
- Breaking changes associated with Angular 2.4+.

### Breaking Changes

- Minimum Angular peer dependency is now 2.4.0
- Removed support for the `connect` pattern: it's simply not a good fit for Angular.
  You should be using the `select` pattern now.
- Remove deprecated constructor arg for `NgRedux`.
- Minimum Angular peer dependency is now 2.4.0
- `NgReduxModule.forRoot` is no more. Now just import `NgReduxModule` directly.

#### Old Way:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgReduxModule } from 'ng2-redux';

@NgModule({
  declarations: [AppComponent],
  imports: [NgReduxModule.forRoot(), BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
class AppModule {
  // etc.
}
```

#### New Way:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgReduxModule } from 'ng2-redux';

@NgModule({
  declarations: [AppComponent],
  imports: [NgReduxModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
class AppModule {
  // etc.
}
```

# 4.2.4

Recovery release that restores the functionality of 4.2.2. Use this release
if you're on Angular < 2.2. If your on Angular >= 2.3, you'll need to use
ng2-redux@5.0.0-beta.0 (see v5.x branch for the changelog) to consume the
fix for #282 (due to a breaking change in Angular).

# 4.2.1, 4.2.3

Botched releases - don't use. Apologies; I've added a `prepublish` script to `npm`
to prevent this from happening again.

# 4.2.1

### Fixes:

- #281 (DevToolsExtension missing from providers list)

# 4.2.0

### Fixes:

- #221 (type error with redux-thunk)

# 4.1.0

### Fixes:

- #228 ('generic' error with AoT)
- #251 (No provider for DevToolsExtension)

# 4.0.0

### Features

- Better support for Angular CLI
- NgModule interface changes to better support Angular 2's ahead-of-time compiler (AoT)

### Fixes

- Update build to use ngc - metadata.json is now produced
- Introduced NgReduxModule
- Fix AoT related bugs #247, #235, #228

### Breaking Change: Using NgReduxModule

```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgReduxModule, NgRedux } from 'ng2-redux';
import { IAppState } from './appstate';
import { rootReducer } from './store';

@NgModule({
  declarations: [AppComponent],
  imports: [NgReduxModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, {});
  }
}
```

**before**

```js
import { select } from 'ng2-redux';
export class MyComponent {
  @select() thing$: Observable<string>;
}
```

**after**

```js
import { NgRedux } from 'ng2-redux';
export class MyComponent {
  thing$: Observable<string>;
  constructor(private ngRedux:NgRedux<MyAppState>) {

  }
  ngOnInit() {
    this.thing$ = this.ngRedux.select (n => n.thing);
  }
}
```

# 3.3.9

### Fixes

- Temp update to npm build to uninstall typings for chai/sinon-chai so `/// <reference types="chai" />` doesn't get added to files.

# 3.3.8

### Fixes

- Manual fix of build to remove chai type reference

# 3.3.7

### Features

- Improved error if trying to dispatch before store is configured - #118, #198

### Fixes

- Relax Zone JS version - #189, #187
- Fix DevTools being out of sync for actions dispatched from tool, #192

### Chores/Misc

- Upgrade to TypeScript 2 - #189, #190
- Add Code Coverage - #193, #206, #207

# 3.3.5

### Fixes

- Update redux peer dependency to 3.5.0
  - observable shim which we depend on was introduced in 3.5.0, not 3.4.0

# 3.3.4

### Chore

- Update to RC5 (#184, fixes #183)
- Include src in npm package (#182, fixes #180)

### Fixes

- Fix window in Universal (#185, fixes #172)

# 3.3.3

### Fixes

- Fix window is undefined in Universal (#178, fixes #172)

# 3.3.2

### Fixes

- Change seamless immutable integration to not need conditional require (#169)

# 3.3.1

### Fixes

- Argument to DevTools enhancer is now optional (#164)
- Decorator deletes key on target, not `this`. (#168, fixes #166)

# 3.3.0

### Features

- [DevToolsExtension - convience wrapper for dev tools](https://github.com/angular-redux/store/blob/master/articles/redux-dev-tools.md) (#115)
- [Select - seamless support for ImmutableJS](https://github.com/angular-redux/store/blob/master/articles/immutable-js.md) (#160)

### Fixes

- Able to use `@select` in services
- Behavior of `select` with chained dispatches, (fixes #149, #153)

# 3.2.0

### Features

- Added a `provideStore()` function which lets you pass in a already created
  store. It can be used as this:

Create your store:

```typescript
// store.ts

import {
  applyMiddleware,
  Store,
  combineReducers,
  compose,
  createStore,
} from 'redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';

import { myReducer } from './reducers/my-reducer';

const rootReducer = combineReducers({
  myReducer,
});

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk, reduxLogger)),
) as Store;
```

Create your App and call `provideStore` with your newly created store:

```typescript
// app.ts

import { NgRedux } from 'ng2-redux';
import { store } from './store.ts';

interface IAppState {
  // ...
}
@Component({
  // ... etc.
})
class App {
  constructor(private ngRedux: NgRedux) {
    this.ngRedux.provideStore(store);
  }

  // ...
}
```

# 3.1.0

### Features

- Added a 'path' option to `ngRedux.select()` and `@select()`. Now you can
  do stuff like `@select(['foo', 'bar'])` to select `state.foo.bar` into
  an observable.

- Add ability to provide custom comparer to @select decorator to keep consistent with ngRedux.select

```js
import { is } from 'immutablejs';

export class SomeComponent {
  @select((n = n.some.selector), is)
  someSelector$: Observable<any>;
}
```

### Features

# 3.0.8

### Fix

- AppliicationRef is optional dependency, fixes#127

# 3.0.0

### Features

#### Select Decorator

This release introduces the new decorator interface. You can now use
`@select` to create an observable from a slice of store state.

See 'the select pattern' in [README.md](README.md#the-select-pattern)
for a complete description of how to use this new decorator.

#### Simpler Redux DevTools Integration

You no longer need to manually subscribe and `ApplicationRef.tick()`
for Redux DevTools to work; we do this automatically for you.

### Breaking Changes

#### Bootstrapping

We've changed how bootstrapping `ng2-redux` works. The `provider`
function has gone away in favour of making NgRedux a first-class
`@Injectable`.

You now configure your store in the constructor of your top-level
app component instead of prior to bootstrapping. This allows the
store to be configured with middleware and enhancers that rely on
Angular 2 services, which previously was unnecessarily difficult.

##### Old way:

**bootstrap.ts:**

```typescript
import { bootstrap } from '@angular/platform-browser-dynamic';
import { createStore, applyMiddleware, compose } from 'redux';
import { NgRedux } from 'ng2-redux';
const createLogger = require('redux-logger');
const persistState = require('redux-localstorage');
import { rootReducer } from './reducers';
import { App } from './app';

// Confusing and hard to use with dependency injection.
const middleware = [createLogger()];
const enhancers = [persistState('counter', { key: 'example-app' })];
const store = compose(applyMiddleware(middleware), ...enhancers)(createStore)(
  rootReducer,
);

bootstrap(App, [provide(store)]);
```

**app.ts**

```typescript
import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';

@Component({
  // ...
})
export class App {
  constructor(private ngRedux: NgRedux) {}
}
```

##### New way:

**bootstrap.ts:**

```typescript
import { bootstrap } from '@angular/platform-browser-dynamic';
import { NgRedux } from 'ng2-redux';
import { App } from './app';

bootstrap(App, [Ng2Redux]);
```

**app.ts**

```typescript
import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { reduxLogger } from 'redux-logger';
import { initialState, rootReducer } from './reducers';

@Component({
  // ...
})
export class App {
  constructor(private ngRedux: NgRedux) {
    const middleware = [reduxLogger];
    const enhancers = [persistState('counter', { key: 'example-app' })];

    // Easier to understand, and can use middleware or enhancers from DI.
    ngRedux.configureStore(rootReducer, initialState, middleware, enhancers);
  }
}
```

#### Example App Updates

The example app has been updated to use `@select` and a
DI-aware action creator service (`counter-actions.ts`). It now also
shows examples of using middleware and enhancers from the Redux
community: `redux-logger` and `redux-localstorage`.

# 2.2.2

### Features

- **Type definitions**:
  - Ported to typescript
  - Supports typed stores / reducers
  - Uses offical Redux type definitions
- **Type Injectable**:
  - Able to inject `NgRedux` into your component by type, and not need `@Inject('ngRedux')`
  - `@Inject('ngRedux')` still works

```typescript
import { NgRedux } from 'ng2-redux';
// ...
export class MyComponent {
  constructor(private ngRedux: NgRedux) {}
}
```

- **State as Observable**: Ability to expose parts of your state as an observable.

```typescript
select<S>(selector: string | number | symbol | ((state: RootState) => S), comparer?: (x: any, y: any) => boolean): Observable<S>;
    wrapActionCreators: (actions: any) => (dispatch: Redux.Dispatch<any>) => Redux.ActionCreator<{}> | Redux.ActionCreatorsMapObject;
```

Example use:

```typescript
import { NgRedux } from 'ng2-redux';
// ...
export class MyComponent implements OnInit {
  countByKey$: Observable<number>;
  countByFunc$: Observable<number>;

  constructor(private ngRedux: NgRedux) {
    this.countByKey$ = this.ngRedux.select('count');
    this.countByFunc$ = this.ngRedux.select((state) => state.count);
  }
}
```

Also have the ability to provide a custom compare function.

```typescript
import { is, Map } from 'immutable';
import { NgRedux } from 'ng2-redux';

// ...
export class MyComponent implements OnInit {
  person$: Observable<Map<string, any>>;

  constructor(private ngRedux: ngRedux) {
    // even if the reference of the object has changed,
    // if the data is the same - it wont be treated as a change
    this.person$ = this.ngRedux.select((state) => state.people.get(0), is);
  }
}
```
