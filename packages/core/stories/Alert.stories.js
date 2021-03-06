import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  Alert, Divider, Text, View,
} from '~/components';
import Decorator, { monospace } from './Decorator';

const componentInformations = `The ${monospace('Alert')}.`;

storiesOf('Alert', module)
  .addDecorator(Decorator(componentInformations))
  .add('default', () => <Alert>This is a normal example alert!</Alert>)
  .add('types', () => (
    <View>
      <Alert>This is a normal example alert!</Alert>
      <Alert type="success">This is a success example error!</Alert>
      <Alert type="warning">This is a warning example error!</Alert>
      <Alert type="danger">This is a danger example error!</Alert>
    </View>
  ))
  .add('with content', () => (
    <View>
      <Alert type="success">
        <Text type="h5">Complete Mission!</Text>
        <Text>
          This example text is going to run a bit longer so that you can see how spacing within an
          alert works with this kind of content.
        </Text>
        <Divider />
        <Text>
          Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
        </Text>
      </Alert>
    </View>
  ));
