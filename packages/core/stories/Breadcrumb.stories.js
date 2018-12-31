import React from 'react';
import * as Icons from 'react-feather';
import { storiesOf } from '@storybook/react';

import { Breadcrumb, View } from '~/components';

import Decorator, { monospace } from './Decorator';

const componentInformations = `The ${monospace('Breadcrumb')}.`;

storiesOf('Breadcrumb', module)
  .addDecorator(Decorator(componentInformations))
  .add('default', () => (
    <View>
      <Breadcrumb>
        <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/settings">Settings</Breadcrumb.Item>
        <Breadcrumb.Item href="/settings/accessibility">Accessibility</Breadcrumb.Item>
        <Breadcrumb.Item>Voice Control</Breadcrumb.Item>
      </Breadcrumb>
    </View>
  ))
  .add('separator arrow type', () => (
    <View>
      <Breadcrumb separator="arrow">
        <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/settings">Settings</Breadcrumb.Item>
        <Breadcrumb.Item href="/settings/accessibility">Accessibility</Breadcrumb.Item>
        <Breadcrumb.Item>Voice Control</Breadcrumb.Item>
      </Breadcrumb>
    </View>
  ))
  .add('without link', () => (
    <View>
      <Breadcrumb separator="arrow">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/settings">Settings</Breadcrumb.Item>
        <Breadcrumb.Item href="/settings/accessibility">Accessibility</Breadcrumb.Item>
        <Breadcrumb.Item>Voice Control</Breadcrumb.Item>
      </Breadcrumb>
    </View>
  ))
  .add('home is icon', () => (
    <View>
      <Breadcrumb separator="arrow">
        <Breadcrumb.Item>
          {/* Fix center appearance. */}
          <Icons.Home style={{ marginTop: 3 }} size={16} />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/settings">Settings</Breadcrumb.Item>
        <Breadcrumb.Item href="/settings/accessibility">Accessibility</Breadcrumb.Item>
        <Breadcrumb.Item>Voice Control</Breadcrumb.Item>
      </Breadcrumb>
    </View>
  ));
