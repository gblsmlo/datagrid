import { DataGridExample } from './data-grid-story-fixtures'
import { dataGridMeta, type DataGridStory, storyParameters } from './data-grid-story-meta'
import systemPrompt from './prompts/pinned-loading.system-prompt.md?raw'

export default dataGridMeta

export const PinnedLoading: DataGridStory = {
  parameters: storyParameters(
    'Demonstra o estado de carregamento preservando colunas explicitamente fixadas.',
    systemPrompt,
  ),
  render: () => <DataGridExample data={[]} isLoading pinOuterColumns showPagination={false} />,
}
