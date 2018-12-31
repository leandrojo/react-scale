import React from 'react';
import { storiesOf } from '@storybook/react';

import { Text, View } from '~/components';
import Decorator, { monospace } from './Decorator';

const componentInformations = `The ${monospace('Text')}.`;

storiesOf('Text', module)
  .addDecorator(Decorator(componentInformations))
  .add('default', () => <Text>This is a normal example text!</Text>)
  .add('heading', () => (
    <View>
      <Text type="h1">H1, heading type!</Text>
      <Text type="h2">H2, heading type!</Text>
      <Text type="h3">H3, heading type!</Text>
      <Text type="h4">H4, heading type!</Text>
      <Text type="h5">H5, heading type!</Text>
      <Text type="h5">H6, heading type!</Text>
    </View>
  ))
  .add('paragraph', () => (
    <View>
      <Text type="h4">Lorem Ipsum!</Text>
      <Text type="paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas minus expedita voluptatem
        quibusdam earum minima dolore, dolor corrupti? Natus magni soluta eum commodi tempora quas
        totam unde mollitia provident veniam. Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Quo ratione velit corporis minima dolor aliquam ipsam temporibus facere nesciunt
        tenetur incidunt iste odit, eius deleniti hic voluptatum ullam rem. Dignissimos! Dolores
        voluptas dolorem impedit, dolore incidunt, laborum soluta ducimus repellat natus beatae
        nostrum aspernatur excepturi laboriosam officiis tempore veniam tenetur error repudiandae
        necessitatibus. Aut sapiente molestiae sit minima qui necessitatibus. Atque sequi unde
        molestias a laborum nesciunt fuga, dicta numquam reiciendis dolorem sunt nam incidunt? Magni
        eum natus ratione pariatur maxime repudiandae, quia, autem, dicta vitae vero dolorem aliquam
        a.
      </Text>
    </View>
  ));
