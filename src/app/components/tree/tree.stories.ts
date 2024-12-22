import { type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { TreeComponent } from './tree.component';
import { provideHttpClient } from '@angular/common/http';


const meta: Meta<TreeComponent> = {
  title: 'Components/Tree',
  component: TreeComponent,
  tags: ['autodocs'],

  argTypes: {
    value: { control: 'object' },
    cols: { control: 'object' },
    expandedIcon: { control: 'text' },
    collapsedIcon: { control: 'text' },
    selectionMode: { control: 'text' }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
  decorators: [
    (storyFunc) => ({
      ...storyFunc(),
      providers: [provideHttpClient()], // Adiciona o HttpClient ao contexto
    }),
  ],
};


export default meta;
type Story = StoryObj<TreeComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    value: [
      {
        label: 'Root',
        expanded: true,
        children: [
          { label: 'Child 1', children: [{ label: 'Subchild 1.1' }] },
          { label: 'Child 2' },
        ],
      },
    ],
    expandedIcon: 'pi pi-folder-open',
    collapsedIcon: 'pi pi-folder',
    cols: [
      { field: 'name', header: 'Name' },
      { field: 'size', header: 'Size' },
      { field: 'type', header: 'Type' },
    ],
    selectionMode: 'single',
  },
};
