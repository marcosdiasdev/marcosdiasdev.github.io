import { Meta, StoryObj } from '@storybook/react';
import AppTemplate from './AppTemplate';

const meta: Meta<typeof AppTemplate> = {
  title: 'AppTemplate',
  component: AppTemplate,
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof AppTemplate>;

export const Default: Story = {};
