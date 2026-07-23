import { DataGridExample } from './data-grid-story-fixtures'
import { dataGridMeta, type DataGridStory, storyParameters } from './data-grid-story-meta'
import systemPrompt from './prompts/loading.system-prompt.md?raw'

export default dataGridMeta

export const Loading: DataGridStory = {
  parameters: storyParameters('Demonstra o estado de carregamento padrão da DataGrid.', systemPrompt),
  render: () => <DataGridExample data={[]} isLoading />,
}
