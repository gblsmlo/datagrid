import { WideDragScrollExample } from './data-grid-story-fixtures'
import { dataGridMeta, type DataGridStory, storyParameters } from './data-grid-story-meta'
import systemPrompt from './prompts/wide-drag-scroll.system-prompt.md?raw'

export default dataGridMeta

export const WideDragScroll: DataGridStory = {
  parameters: storyParameters(
    'Demonstra overflow horizontal amplo, colunas fixadas e arraste lateral em superfícies não interativas.',
    systemPrompt,
  ),
  render: () => <WideDragScrollExample />,
}
