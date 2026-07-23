import { DataGridExample, records } from './data-grid-story-fixtures'
import { dataGridMeta, type DataGridStory, storyParameters } from './data-grid-story-meta'
import systemPrompt from './prompts/without-add-row.system-prompt.md?raw'

export default dataGridMeta

export const WithoutAddRow: DataGridStory = {
  parameters: storyParameters(
    'Demonstra a DataGrid sem onRowAdd e sem o trigger final para adicionar uma linha.',
    systemPrompt,
  ),
  render: () => <DataGridExample allowRowAdd={false} data={records} />,
}
