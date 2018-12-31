import React from 'react';
import { storiesOf } from '@storybook/react';

import { Divider, Text } from '~/components';
import Decorator, { monospace } from './Decorator';

const componentInformations = `The ${monospace('Divider')}.`;

storiesOf('Divider', module)
  .addDecorator(Decorator(componentInformations))
  .add('divider horizontal text', () => (
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa facere iusto est,
      perspiciatis, nemo delectus quisquam voluptatem dolore sunt maiores illum quam provident velit
      id possimus saepe. Accusantium, atque quia!
      <Divider />
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident quas corporis ipsam
      voluptatem deleniti molestias, natus at modi, consectetur, debitis et consequatur ducimus
      laudantium sint facere consequuntur dicta praesentium placeat.
    </Text>
  ))
  .add('vertical', () => (
    <Text>
      Text
      <Divider orientation="vertical" />
      <a href="/one">Link One</a>
      <Divider orientation="vertical" />
      <a href="/two">Link Two</a>
    </Text>
  ))
  .add('type dashed', () => (
    <Text>
      <Divider type="dashed" />
    </Text>
  ));
