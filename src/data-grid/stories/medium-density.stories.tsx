import { DataGridExample, records } from './data-grid-story-fixtures'
import { dataGridMeta, type DataGridStory, storyParameters } from './data-grid-story-meta'
import systemPrompt from './prompts/medium-density.system-prompt.md?raw'

export default dataGridMeta

export const MediumDensity: DataGridStory = {
  parameters: storyParameters('Demonstra a densidade média das linhas.', systemPrompt),
  render: () => <DataGridExample data={records} density="medium" />,
}
