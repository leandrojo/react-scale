import React from 'react';
import { storiesOf } from '@storybook/react';

import { Spinner, Text, View } from '~/components';
import Decorator, { monospace } from './Decorator';

const componentInformations = `The ${monospace('Spinner')}.`;

storiesOf('Spinner', module)
  .addDecorator(Decorator(componentInformations))
  .add('default', () => <Spinner />)
  .add('sizes', () => (
    <View>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner />
      <Spinner size="xs" />
    </View>
  ))
  .add('like a wrapper', () => (
    <Spinner>
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
          molestias a laborum nesciunt fuga, dicta numquam reiciendis dolorem sunt nam incidunt?
          Magni eum natus ratione pariatur maxime repudiandae, quia, autem, dicta vitae vero dolorem
          aliquam a.
        </Text>
      </View>
    </Spinner>
  ))
  .add('with tip', () => (
    <Spinner tip="Loading...">
      <View>
        <Text type="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas minus expedita voluptatem
          quibusdam earum minima dolore, dolor corrupti? Natus magni soluta eum commodi tempora quas
          totam unde mollitia provident veniam. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Quo ratione velit corporis minima dolor aliquam ipsam temporibus facere nesciunt
          tenetur incidunt iste odit, eius deleniti hic voluptatum ullam rem. Dignissimos!
        </Text>
      </View>
    </Spinner>
  ));
