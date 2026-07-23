import { DataGridExample, records } from './data-grid-story-fixtures'
import { dataGridMeta, type DataGridStory, storyParameters } from './data-grid-story-meta'
import systemPrompt from './prompts/single-select-cells.system-prompt.md?raw'

export default dataGridMeta

export const SingleSelectCells: DataGridStory = {
  parameters: storyParameters(
    'Demonstra a primitiva opt-in de célula single-select com mutação controlada pelo consumer.',
    systemPrompt,
  ),
  render: () => <DataGridExample data={records} />,
}
