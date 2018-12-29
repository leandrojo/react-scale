# React Scale

[![](https://img.shields.io/circleci/project/github/RedSparr0w/node-csgo-parser/master.svg?style=flat-square)](https://github.com/leandrojo/react-scale)

## Installation

	`npm install @react-scale/core`

## Roadmap (order by alphabetical)
- [ ] Alerts;
	- [x] color;
	- [ ] closable;
	- [ ] onClose;
- [x] Badges;
	- [x] size;
	- [x] pill;
	- [x] type;
	- [x] onClear;
- [ ] Breadcrumb;
	- [ ] separator -> `(ReactElement|Icon)`;
	- [ ] Breadcrumbs.Item;
- [x] Buttons;
	- [x] sizes;
	- [x] type; -> `(primary|success|warning|danger)`
	- [x] fluid;
	- [x] icons and text support ;
	- [ ] icon;
		- [ ] circle;
	- [ ] disabled;
	- [ ] active;
	- [ ] onPress;
	- [ ] href;
	- [ ] animated hover;
	- [ ] animated loading;
- [ ] ButtonGroups;
	- [ ] size;
	- [ ] onChange;
	- [ ] vertical;
	- [ ] fluid;
	- [ ] type; -> `(normal|checkbox|radio)`
	- [ ] buttonType;
- [x] ButtonToolbars;
	- [x] spacing;
- [ ] DatePicker;
- [ ] Dropdowns;
	- [ ] type; -> `(primary|success|warning|danger)`
	- [ ] onChange;
	- [ ] buttonType;
	- [ ] split;
	- [ ] caret;
	- [ ] position;
- [x] Icons;
	- [x] names;
	- [x] size;
	- [x] color;
- [ ] Inputs;
- [ ] InputsGroup;
- [ ] Menu; (also using on dropdown)
	- [ ] Menu.Item;
		- [ ] divider;
		- [ ] header;
		- [ ] disabled;
		- [ ] href;
		- [ ] onPress;
- [ ] Modal `react-modal`;
- [ ] Pagination;
	- [ ] size;
	- [ ] Pagination.Item;
		- [ ] href;
		- [ ] disabled;
		- [ ] onPress;
		- [ ] previous;
		- [ ] next;
- [ ] Panel;
	- [ ] Panel.Heading;
	- [ ] Panel.Content;
	- [ ] Panel.Footer;
	- [ ] expanded;
	- [ ] type; -> `(primary|success|warning|danger)`
	- [ ] PanelGroup;
	- [ ] accordion;
- [ ] Popovers;
	- [ ] placement; -> `(left|top|right|bottom)`
- [ ] Progress;
	- [ ] animated
- [ ] Selects `react-select`;
- [ ] Spinners;
- [ ] Tabs `react-tabs`;
	- [ ] Tab.Item;
	- [ ] Tab.Content;
- [ ] Text (Typography);
	- [x] span;
	- [x] h1;
	- [x] h2;
	- [x] h3;
	- [x] h4;
	- [x] h5;
	- [x] paragraph;
- [ ] Tooltips;
	- [ ] placement; -> `(left|top|right|bottom)`

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
Using icons package `react-feather`;

```jsx
<Icons.Camera />
<Icons.Mail color="red" />
<Icons.Square color="blue" size={36} />
```

## Tests

  `npm test`