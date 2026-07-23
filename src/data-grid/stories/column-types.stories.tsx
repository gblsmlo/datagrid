import { ColumnTypesExample } from './data-grid-story-fixtures'
import { dataGridMeta, type DataGridStory, storyParameters } from './data-grid-story-meta'
import systemPrompt from './prompts/column-types.system-prompt.md?raw'

export default dataGridMeta

export const ColumnTypes: DataGridStory = {
  parameters: storyParameters(
    'Shows every semantic column type and its corresponding header icon independently from cell rendering.',
    systemPrompt,
  ),
  render: () => <ColumnTypesExample />,
}
