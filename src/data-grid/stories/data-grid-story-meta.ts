import type { Meta, StoryObj } from '@storybook/react-vite'
import { DataGrid } from '../data-grid'
import dataGridDocs from '../README.md?raw'

export const dataGridMeta = {
  component: DataGrid,
  parameters: {
    docs: {
      description: {
        component: dataGridDocs,
      },
    },
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Patterns/DataGrid',
} satisfies Meta<typeof DataGrid>

export type DataGridStory = StoryObj<typeof DataGrid>

export function storyParameters(description: string, systemPrompt: string) {
  return {
    docs: {
      description: {
        story: `${description}\n\n### System prompt\n\n\`\`\`text\n${systemPrompt.trim()}\n\`\`\``,
      },
    },
  }
}
