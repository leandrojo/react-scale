import React from 'react';
import * as Icons from 'react-feather';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button, ButtonToolbar, Text } from '~/components';
import Decorator, { monospace } from './Decorator';

const componentInformations = `The ${monospace('Button')}.`;

storiesOf('Button', module)
  .addDecorator(Decorator(componentInformations))
  .add('with text', () => <Button onPress={action('clicked')}>Hello Button</Button>)
  .add('with auto-width', () => (
    <Button fluid onPress={action('clicked')}>
      Hello Fluid Button
    </Button>
  ))
  .add('types', () => (
    <ButtonToolbar>
      <Button type="primary" onPress={action('clicked')}>
        Primary Button
      </Button>

      <Button type="success" onPress={action('clicked')}>
        Success Button
      </Button>

      <Button type="warning" onPress={action('clicked')}>
        Warning Button
      </Button>

      <Button type="danger" onPress={action('clicked')}>
        Danger Button
      </Button>

      <Button type="link" onPress={action('clicked')}>
        Link
      </Button>
    </ButtonToolbar>
  ))
  .add('sizes', () => (
    <ButtonToolbar>
      <Button size="xl" onPress={action('clicked')}>
        Extra Large Button
      </Button>

      <Button size="lg" onPress={action('clicked')}>
        Large Button
      </Button>

      <Button size="sm" onPress={action('clicked')}>
        Small Button
      </Button>

      <Button size="xs" onPress={action('clicked')}>
        Extra Small Button
      </Button>
    </ButtonToolbar>
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
  .add('with icons', () => (
    <Button type="danger" onPress={action('clicked')}>
      <Icons.X color="white" size={24} />
    </Button>
  ))
  .add('with icons and text', () => (
    <Button type="success" onPress={action('clicked')}>
      <Icons.DollarSign color="white" size={16} />
      <Text style={{ paddingLeft: 5 }}>Pay on delivery</Text>
    </Button>
  ));
