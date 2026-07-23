import { DataGridExample, overflowRecords } from './data-grid-story-fixtures'
import { dataGridMeta, type DataGridStory, storyParameters } from './data-grid-story-meta'
import systemPrompt from './prompts/virtualized-overflow.system-prompt.md?raw'

export default dataGridMeta

export const VirtualizedOverflow: DataGridStory = {
  parameters: storyParameters(
    'Demonstra header sticky, overflow vertical, virtualização e composição de add-row.',
    systemPrompt,
  ),
  render: () => (
    <DataGridExample
      actionLabel="Aplicar ação"
      allowRowAdd
      data={overflowRecords}
      maxHeight={420}
      showPagination={false}
      virtualize
    />
  ),
}
