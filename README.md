# React Scale

[![CircleCI](https://circleci.com/gh/leandrojo/react-scale/tree/master.svg?style=shield)](https://circleci.com/gh/leandrojo/react-scale/tree/master)
[![NPM](https://img.shields.io/npm/v/@react-scale/core.svg)](https://www.npmjs.com/package/@react-scale/core)

## About

React Scale is an intuitive UI framework and own powerful customization of your components with CSS-in-JS.

### Why?

Look where we are: many excellent libraries can deliver what we want, so we do not reinvent the wheel every time we need to start a human interface, minimally based on known experience. All these libraries show us the plurality we need to move forward as a community. Yet they may also show us that perhaps what we really need is a more intrinsic control of this basis without our having to create everything from scratch.

This design system brings you the ability to change the primary values and that these changes instantly reflect on all components.

## Installation

`npm install @react-scale/core`

## Live Playground

For examples of components in action, go to https://leandrojo.github.io/react-scale.

## Components

### Badges

A simple badge:

```jsx
<Badge>First Badge</Badge>
```

A style badge pill:

```jsx
<Badge pill>First Badge Pill</Badge>
```

A style type badge like styles buttons:

```jsx
<Badge type="success">
  Success Badge
</Badge>

<Badge type="danger">
  Danger Badge
</Badge>
```

Has also pill removable action and size:

```jsx
<Badge size="sm" removable pill onPress={this.onClear}>
  Telephone
</Badge>
```

### Buttons

A complete buttons props:

```jsx
<Button onPress={this.onPress}>Default Button</Button>
```

A style type badge like styles buttons:

```jsx
<Button type="success" onPress={this.onPress}>
  Success Button
</Button>

<Button type="danger" onPress={this.onPress}>
  Danger Button
</Button>
```

And sizes:

```jsx
<Button size="xs" onPress={this.onPress}>
  Telephone
</Button>

<Button size="sm" onPress={this.onPress}>
  Telephone
</Button>

<Button size="lg" onPress={this.onPress}>
  Telephone
</Button>

<Button size="xl" onPress={this.onPress}>
  Telephone
</Button>
```

### Icons

Using icons package [react-feather](https://github.com/carmelopullara/react-feather); Feather is a collection of simply beautiful open source icons designed by [Cole Bemis](https://github.com/colebemis/).

```jsx
import * as Icons from 'react-feather';

<Icons.Camera />
<Icons.Mail color="red" />
<Icons.Square color="blue" size={36} />
```

## Roadmap (order by alphabetical)

- [x] Alerts;
- [x] Badges;
- [x] Breadcrumb;
- [x] Buttons;
- [ ] ButtonGroups;
- [x] ButtonToolbars;
- [ ] DatePicker;
- [x] Divider;
- [ ] Dropdowns;
- [x] Icons (external use with `react-feather`);
- [ ] Inputs;
- [ ] InputsGroup;
- [ ] Menu;
- [ ] Modal;
- [ ] Panel;
- [ ] Popovers;
- [ ] Progress;
- [ ] Selects;
- [x] Spinners;
- [ ] Tabs;
- [x] Text;
- [ ] Tooltips;

## Tests

`npm test`
