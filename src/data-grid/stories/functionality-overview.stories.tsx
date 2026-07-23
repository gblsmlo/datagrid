import { DataGridExample, records } from './data-grid-story-fixtures'
import { dataGridMeta, type DataGridStory, storyParameters } from './data-grid-story-meta'
import systemPrompt from './prompts/functionality-overview.system-prompt.md?raw'

export default dataGridMeta

export const FunctionalityOverview: DataGridStory = {
  parameters: storyParameters(
    'Composes DataGrid controls, stable selection, pinning, pagination and contextual actions without introducing feature semantics.',
    systemPrompt,
  ),
  render: () => (
    <DataGridExample
      actionLabel="Aplicar ação"
      allowRowAdd
      data={records}
      initialSelectedId="record-1"
    />
  ),
}
