import React from 'react';
import * as Icons from 'react-feather';
import { storiesOf } from '@storybook/react';

import {
  Breadcrumb, BreadcrumbToolbar, Button, ButtonToolbar, View,
} from '~/components';

import Decorator, { monospace } from './Decorator';

const componentInformations = `The ${monospace('Breadcrumb')}.`;

storiesOf('BreadcrumbToolbar', module)
  .addDecorator(Decorator(componentInformations))
  .add('default', () => (
    <View>
      <BreadcrumbToolbar>
        <Breadcrumb>
          <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/settings">Settings</Breadcrumb.Item>
          <Breadcrumb.Item href="/settings/accessibility">Accessibility</Breadcrumb.Item>
          <Breadcrumb.Item>Voice Control</Breadcrumb.Item>
        </Breadcrumb>
      </BreadcrumbToolbar>
    </View>
  ))
  .add('with right button', () => (
    <View>
      <BreadcrumbToolbar>
        <Breadcrumb>
          <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/settings">Settings</Breadcrumb.Item>
          <Breadcrumb.Item href="/settings/accessibility">Accessibility</Breadcrumb.Item>
          <Breadcrumb.Item>Voice Control</Breadcrumb.Item>
        </Breadcrumb>
        <ButtonToolbar>
          <Button>Cancel Checkout</Button>
          <Button>
            <Icons.Settings size={16} />
          </Button>
        </ButtonToolbar>
      </BreadcrumbToolbar>
    </View>
  ));
