import React from 'react';
import * as Icons from 'react-feather';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { colors } from '~/common/theme';
import { Button, ButtonToolbar } from '~/components';

import Decorator, { monospace } from './Decorator';

const componentInformations = `The ${monospace('Button')}.`;

storiesOf('ButtonToolbar', module)
  .addDecorator(Decorator(componentInformations))
  .add('default', () => (
    <ButtonToolbar>
      <Button type="primary" onPress={action('clicked')}>
        Primary Button
      </Button>
      <Button onPress={action('clicked')}>Two</Button>
      <Button onPress={action('clicked')}>Three</Button>
      <Button onPress={action('clicked')}>Four</Button>
      <Button onPress={action('clicked')}>Five</Button>
      <Button onPress={action('clicked')}>
        <Icons.Bell size={16} color={colors.grayDark} />
      </Button>
    </ButtonToolbar>
  ));
