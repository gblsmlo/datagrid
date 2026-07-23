import { DataGridExample } from './data-grid-story-fixtures'
import { dataGridMeta, type DataGridStory, storyParameters } from './data-grid-story-meta'
import systemPrompt from './prompts/empty.system-prompt.md?raw'

export default dataGridMeta

export const Empty: DataGridStory = {
  parameters: storyParameters('Demonstra a coleção vazia com mensagem contextual.', systemPrompt),
  render: () => <DataGridExample data={[]} emptyMessage="Nenhum registro para exibir." />,
}
