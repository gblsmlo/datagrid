# DataGrid

A domain-neutral, accessible DataGrid view for React applications built with
[COSS](https://github.com/cosscom/coss), Base UI, TanStack Table, and Tailwind CSS.

The package provides the interaction and presentation layer for SaaS collection
views. Your application remains responsible for business columns, permissions,
remote state, mutations, navigation, and persistence.

## Highlights

- WAI-ARIA grid semantics and roving keyboard focus
- sorting, filtering, pagination, selection, resizing, visibility, and pinning
- stable row identity through TanStack Table's `getRowId`
- opt-in editable select cells and row creation
- loading, empty, grouped, overflow, and virtualized states
- threshold-based horizontal drag scrolling that preserves clicks and controls
- composable toolbar controls with no product-specific actions
- COSS visual primitives implemented on Base UI

## Requirements

- React 19
- Base UI 1.x
- Tailwind CSS 4

The package is COSS-first. COSS is distributed as source through its component
registry, so this repository owns the small set of COSS primitives required by
the view. A future Radix implementation will be a separate adapter and will not
change the domain-neutral contract.

## Installation

Install the published package with your package manager:

```bash
pnpm add @tc96/datagrid
# or: bun add @tc96/datagrid
# or: npm install @tc96/datagrid
```

The consumer must already provide the peer dependencies:

```bash
pnpm add react react-dom @base-ui/react tailwindcss
```

### COSS source location

`@tc96/datagrid` supports two installation modes. Use the npm package when you
want to import it from `node_modules`. Use the bundled registry item when you
want the source copied into the consuming app.

Keep `ui` mapped to your primitive components and add `patterns` for TC96
patterns. `patterns` is not a replacement for `ui`:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "tsx": true,
  "aliases": {
    "components": "@/components",
    "ui": "@/components/ui",
    "patterns": "@/components/patterns"
  }
}
```

After installing the package, add the local registry item:

```bash
bun add @tc96/datagrid
bunx shadcn@latest add ./node_modules/@tc96/datagrid/registry/datagrid.json
```

The registry item targets `@components/patterns/datagrid`, which resolves
through `aliases.components` and keeps `./components/ui` untouched.

Tailwind must scan the installed package and your theme must expose the standard
COSS semantic tokens:

```css
@import "tailwindcss";
@source "../node_modules/@tc96/datagrid/dist";
```

## Quick start

```tsx
import {
  DataGrid,
  DataGridSearch,
  DataGridToolbar,
  DataGridViewOptions,
  useDataGrid,
  type DataGridColumnDef,
} from "@tc96/datagrid";

type RecordItem = {
  id: string;
  name: string;
  status: string;
};

const columns: DataGridColumnDef<RecordItem>[] = [
  {
    accessorKey: "name",
    header: "Name",
    meta: { label: "Name", type: "title" },
  },
  {
    accessorKey: "status",
    header: "Status",
    meta: { label: "Status", type: "status", variant: "badge" },
  },
];

export function RecordsView({ records }: { records: RecordItem[] }) {
  const { table } = useDataGrid({
    columns,
    data: records,
    getRowId: (record) => record.id,
  });

  return (
    <>
      <DataGridToolbar>
        <DataGridSearch table={table} />
        <DataGridViewOptions table={table} />
      </DataGridToolbar>
      <DataGrid aria-label="Records" table={table} />
    </>
  );
}
```

Use `@tc96/datagrid/core` when a non-visual layer only needs the public types
and constants.

## Ownership boundary

| Package owns | Consumer owns |
| --- | --- |
| grid semantics and keyboard behavior | domain column definitions and labels |
| view state wired through TanStack Table | server state, loading orchestration, and errors |
| generic cells and toolbar primitives | permissions and available actions |
| local drag-scroll and virtualization | mutations, optimistic updates, and persistence |
| presentation-level callbacks | navigation and product workflows |

The package never infers authorization or a valid business transition from the
shape of the data.

## Development

Use Bun `1.3.14` and Node `24.18.0`.

```bash
bun install
bun run storybook
bun run lint:ci
bun run typecheck
bun test
bun run build
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for the contribution workflow and
[ADR-001](docs/architecture/adr-001-coss-first-adapter.md) for the adapter
decision.

## License

[MIT](LICENSE) © Gabriel Melo.
