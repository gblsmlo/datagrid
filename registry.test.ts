import { describe, expect, test } from 'bun:test'
import registry from './registry.json'
import registryItem from './registry/datagrid.json'

type RegistryFile = {
  target?: string
}

function registryTargets(files: RegistryFile[]) {
  return files.map((file) => file.target).filter((target): target is string => Boolean(target))
}

describe('registry install contract', () => {
  test('installs DataGrid source through the patterns alias', () => {
    const registryFileTargets = registryTargets(registry.items[0]?.files ?? [])
    const itemFileTargets = registryTargets(registryItem.files ?? [])
    const targets = [...registryFileTargets, ...itemFileTargets]

    expect(targets.length).toBeGreaterThan(0)
    expect(targets.every((target) => target.startsWith('@patterns/datagrid/'))).toBe(true)
    expect(targets.some((target) => target.startsWith('@components/patterns/'))).toBe(false)
  })

  test('keeps consumer UI primitives on the ui alias', () => {
    expect(registryItem.meta.aliases.ui).toBe('@/components/ui')
    expect(registryItem.meta.aliases.patterns).toBe('@/components/patterns')
    expect(registryItem.meta.installPath).toBe('@patterns/datagrid')
  })
})
