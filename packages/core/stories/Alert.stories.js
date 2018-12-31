import React from 'react';
import { storiesOf } from '@storybook/react';

import { Alert, View } from '~/components';
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
  ));
