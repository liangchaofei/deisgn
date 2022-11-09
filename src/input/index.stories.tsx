import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import input from '.';

export default {
  title: 'Example/input',
  component: input,
} as ComponentMeta<typeof input>;

const Template: ComponentStory<typeof input> = (args) => <input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  children: 'input',
};



export const Basic = () => {
  return <>
  <input type="primary">Primary Button</input>
</>
}

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'input',
};

