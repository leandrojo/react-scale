import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Badge, Text, View } from '~/components';
import Decorator, { monospace } from './Decorator';

const componentInformations = `The ${monospace('Badge')}.`;

storiesOf('Badge', module)
  .addDecorator(Decorator(componentInformations))
  .add('simple', () => <Badge>simple</Badge>)
  .add('simple in text', () => (
    <Text>
      Notifications
      {' '}
      <Badge type="danger">30</Badge>
    </Text>
  ))
  .add('pill', () => <Badge pill>First Pill</Badge>)
  .add('types', () => (
    <View style={{ display: 'flex', flexDirection: 'row' }}>
      <View style={{ paddingRight: 10 }}>
        <Badge type="primary" onClick={action('clicked')}>
          Primary Badge
        </Badge>
      </View>

      <View style={{ paddingRight: 10 }}>
        <Badge type="success" onClick={action('clicked')}>
          Success Badge
        </Badge>
      </View>

      <View style={{ paddingRight: 10 }}>
        <Badge type="warning" onClick={action('clicked')}>
          Warning Badge
        </Badge>
      </View>

      <View style={{ paddingRight: 10 }}>
        <Badge type="danger" onClick={action('clicked')}>
          Danger Badge
        </Badge>
      </View>
    </View>
  ))
  .add('sizes', () => (
    <View style={{ display: 'flex', flexDirection: 'row' }}>
      <View style={{ paddingRight: 10 }}>
        <Badge size="lg">Large Badge</Badge>
      </View>

      <View style={{ paddingRight: 10 }}>
        <Badge>Badge</Badge>
      </View>

      <View style={{ paddingRight: 10 }}>
        <Badge size="sm">Small Badge</Badge>
      </View>
    </View>
  ))
  .add('removable', () => (
    <Badge removable pill>
      First Pill Close
    </Badge>
  ))
  .add('removable all sizes', () => (
    <View style={{ display: 'flex', flexDirection: 'row' }}>
      <View style={{ paddingRight: 10 }}>
        <Badge size="lg" removable pill onPress={action('clicked')}>
          Large Badge
        </Badge>
      </View>

      <View style={{ paddingRight: 10 }}>
        <Badge removable pill onPress={action('clicked')}>
          Badge
        </Badge>
      </View>

      <View style={{ paddingRight: 10 }}>
        <Badge size="sm" removable pill onPress={action('clicked')}>
          Small Badge
        </Badge>
      </View>
    </View>
  ))
  .add('removable types', () => (
    <View style={{ display: 'flex', flexDirection: 'row' }}>
      <View style={{ paddingRight: 10 }}>
        <Badge type="primary" pill removable onClick={action('clicked')}>
          Primary Badge
        </Badge>
      </View>

      <View style={{ paddingRight: 10 }}>
        <Badge type="success" pill removable onClick={action('clicked')}>
          Success Badge
        </Badge>
      </View>

      <View style={{ paddingRight: 10 }}>
        <Badge type="warning" pill removable onClick={action('clicked')}>
          Warning Badge
        </Badge>
      </View>

      <View style={{ paddingRight: 10 }}>
        <Badge type="danger" pill removable onClick={action('clicked')}>
          Danger Badge
        </Badge>
      </View>
    </View>
  ))
  .add('heading with badge', () => (
    <View>
      <Text type="h1">
        H1, heading type!
        <Badge type="danger">New</Badge>
      </Text>
      <Text type="h2">
        H2, heading type!
        <Badge type="danger">New</Badge>
      </Text>
      <Text type="h3">
        H3, heading type!
        <Badge type="danger">New</Badge>
      </Text>
      <Text type="h4">
        H4, heading type!
        <Badge type="danger">New</Badge>
      </Text>
      <Text type="h5">
        H5, heading type!
        <Badge type="danger">New</Badge>
      </Text>
      <Text type="h6">
        H6, heading type!
        <Badge type="danger">New</Badge>
      </Text>
    </View>
  ));
