# Wide
## Roadmap
- [x] Badges;
	- [x] sizes;
	- [x] types;
	- [x] pills;
	- [x] removable;
- [x] Buttons;
	- [x] sizes;
	- [x] types;
	- [x] fluid;
	- [x] icons and text support ;
	- [x] icons support;
- [ ] ButtonGroup;
- [x] Icons;
	- [x] names;
	- [x] size;
	- [x] color;
- [ ] Modal;
- [ ] Menu;
- [ ] Spinner;
- [ ] Breadcrumb;
- [ ] Dropdowns;
- [ ] Form;
- [ ] Input;
- [ ] InputGroup;
- [ ] Select;
- [ ] DatePicker;
- [ ] Tooltips;
- [ ] Popover;
- [ ] Tables;
- [ ] Text (Typography);
	- [x] span;
	- [ ] code;
	- [ ] h1;
	- [ ] h2;
	- [ ] h3;
	- [ ] h4;
	- [ ] h5;
	- [ ] paragraph;

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


### Modal
### Spinner
### Breadcrumb
### Dropdowns
### Form
### Input
### Select
### Tooltips
### Popover
### Tables
### Typography